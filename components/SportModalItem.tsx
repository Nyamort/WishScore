import {Sport} from "../model/Sport";
import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {SPORT_CHANGED} from "../constantes";

type SportModalItemProps = {
    sport: Sport;
    isSelected: boolean;
    selectionChange: () => void;
}

export function SportModalItem(props: SportModalItemProps){
    const dispatch = useDispatch();

    const handlePress = () => {
        props.selectionChange();
        dispatch({type: SPORT_CHANGED, payload: props.sport});
    }


    if(props.isSelected){
        return (
            <View style={styles.selectedRow}>
                <View style={styles.selectedShape}></View>
                <Text style={styles.text}>{props.sport.label}</Text>
            </View>
        )
    }else{
        return (
            <Pressable onPress={handlePress}>
                <Text style={styles.text}>{props.sport.label}</Text>
            </Pressable>
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
    }
});