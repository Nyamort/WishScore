import {StyleSheet, Text, Pressable} from 'react-native'
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Competition} from "../model/Competition";
import { EvilIcons } from '@expo/vector-icons';

type CompetitionListProps = {
    competition: Competition
}
export default function CompetitionListItem(props : CompetitionListProps) {
   
    const competition = props.competition;

    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('classement',{competition: competition})}>
            <Text style={styles.text}>{competition.label}</Text>
            <EvilIcons name={'chevron-right'} size={40} color={'#0f2d37'}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
        color: '#0f2d37',
        fontWeight: '500',
    }
});