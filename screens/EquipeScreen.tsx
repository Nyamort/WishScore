import {Competition} from "../model/Competition";
import {Equipe} from "../model/Equipe";
import {StyleSheet, Text} from "react-native";
import React, {useEffect} from "react";

type EquipeScreenProps = {
    equipe: string;
}

export default function EquipeScreen(props: EquipeScreenProps){
    useEffect(
        () => {
            console.log("Props : " + props.equipe);
        },[props]
    )
    return (
        <>
            <Text style={styles.title}>{props.equipe}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});