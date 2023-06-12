import {Button, FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BottomSheetFlatList, BottomSheetModal, useBottomSheetModal} from "@gorhom/bottom-sheet";
import {SportModalItem} from "./SportModalItem";
import {SportModalHeader} from "./SportModalHeader";
import {FontAwesome} from "@expo/vector-icons";
import {Sport} from "../model/Sport";

export default function SportHeader() {
    const selectedSport = useSelector(state => state.sportReducer.selectedSport);
    const sports = useSelector(state => state.sportReducer.sports) as Sport[];
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['50%', '75%'], []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const {dismiss} = useBottomSheetModal();
    const close = () => {
        dismiss();
    }

    const favoriteSports = useSelector(state => state.favoriReducer.favoris.sports) as Sport[];

    return (
        <View style={styles.container}>
            <Pressable style={styles.selectionButton} onPress={handlePresentModalPress}>
                <FontAwesome name={"caret-down"} size={30} color="white"/>
                <Text style={styles.selectedSport}>{selectedSport.label}</Text>
            </Pressable>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
            >
                <BottomSheetFlatList data={sports}
                                     ListHeaderComponent={elt => <SportModalHeader close={close}/>}
                                     stickyHeaderIndices={[0]}
                                     contentContainerStyle={styles.sports}
                                     renderItem={({item}) => <SportModalItem sport={item}
                                                                             isFavorite={favoriteSports.find(favSport => favSport.id === item.id) !== undefined}
                                                                             isSelected={selectedSport.id === item.id}
                                                                             selectionChange={close}/>}
                ></BottomSheetFlatList>
            </BottomSheetModal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    sports: {
        paddingLeft: 20,
        paddingRight: 20,
        gap: 10,
        paddingBottom: 10,
    },
    selectionButton: {
        flexDirection: "row",
        gap: 10,
    },
    selectedSport: {
        color: "white",
        fontSize: 20,
    }
});