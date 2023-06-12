import {Sport} from "../model/Sport";
import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {FAVORI_SPORT_ADD, FAVORI_SPORT_REMOVE, SPORT_CHANGED} from "../constantes";
import {FontAwesome} from "@expo/vector-icons";
import {addFavoriSport, removeFavoriSport} from "../data/storage/FavoriStorage";

type SportModalItemProps = {
    sport: Sport;
    isSelected: boolean;
    isFavorite: boolean;
    selectionChange: () => void;
}

export function SportModalItem(props: SportModalItemProps) {
    const dispatch = useDispatch();

    const handlePress = () => {
        props.selectionChange();
        dispatch({type: SPORT_CHANGED, payload: props.sport});
    }


    const handleFavori = () => {
        if (props.isFavorite) {
            removeFavoriSport(props.sport).then(r =>
                dispatch({type: FAVORI_SPORT_REMOVE, payload: props.sport})
            );
        } else {
            addFavoriSport(props.sport).then(r =>
                dispatch({type: FAVORI_SPORT_ADD, payload: props.sport})
            );
        }
    }

    if (props.isSelected) {
        return (
            <View style={styles.container}>
                <View style={styles.selectedRow}>
                    <View style={styles.selectedShape}></View>
                    <Text style={styles.text}>{props.sport.label}</Text>
                </View>
                <FontAwesome onPress={handleFavori} name={props.isFavorite ? "star" : "star-o"} size={25}
                             color={"#f5c518"}/>
            </View>

        )
    } else {
        return (
            <View style={styles.container}>
                <Pressable style={styles.row} onPress={handlePress}>
                    <Text style={styles.text}>{props.sport.label}</Text>
                </Pressable>
                <FontAwesome onPress={handleFavori} name={props.isFavorite ? "star" : "star-o"} size={25}
                             color={"#f5c518"}/>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    selectedRow: {
        flexDirection: "row",
    },
    selectedShape: {
        width: 5,
        height: 30,
        backgroundColor: "#0f2d37",
        marginRight: 10
    },
    selectedText: {
        transform: [{translateX: 5}],
    },
    text: {
        fontSize: 20,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    row: {
        width: "80%",
    }
});