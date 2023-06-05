import {Competition} from "../model/Competition";
import {Equipe} from "../model/Equipe";
import {StyleSheet, Text} from "react-native";
import React, {useEffect} from "react";

import {useSelector} from 'react-redux';

type EquipeScreenProps = {
    equipe: string;
}

export default function EquipeScreen(props: EquipeScreenProps){
    // useEffect(
    //     () => {
    //         console.log("Props : " + props.equipe);
    //     },[props]
    // )
    const equipeList = useSelector(state=>state.equipeReducer.equipe);
    // console.log(equipeList);
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