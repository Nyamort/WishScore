import {StyleSheet, Text, Pressable} from 'react-native'
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Competition} from "../model/Competition";

type CompetitionListProps = {
    competition: Competition
}
export default function CompetitionListItem(props : CompetitionListProps) {
   
    const competition = props.competition;

    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate(competition.title as any,{competition: competition})}>
            <Text>{competition.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 24,
        margin: 5,
        padding: 5,
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center'
    }
});