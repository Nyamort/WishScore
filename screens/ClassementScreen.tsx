import {Pressable, StyleSheet} from "react-native";
import React from "react";
import {Table, Row} from 'react-native-table-component';
import EquipeScreen from "./EquipeScreen";
import {NavigationContainer} from "@react-navigation/native";

const classementScreen: any[] = [
    [1, 'FC Barcelone', 85, 35],
    [2, 'Real Madrid', 84, 35],
    [3, 'Atletico Madrid', 83, 35],
    [4, 'FC Seville', 82, 35],
    [5, 'Real Sociedad', 81, 35],
];

const tableHead = ['#', 'Equipe', 'Points', 'Matchs joués'];

export default function ClassementScreen({navigation}) {

    return (
        <Table>
            <Row data={tableHead} style={styles.header} textStyle={styles.headerText}/>
            {classementScreen.map((rowData, index) => (
            <Pressable onPress={() => navigation.navigate("EquipeScreen", {"equipe": classementScreen[index][1]})}>
                <Row key={rowData[0][0]} data={rowData} style={styles.row} textStyle={styles.text}/>
            </Pressable>
            ))}
        </Table>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#f1f8ff',
    },

    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    row: {
        height: 40,
        backgroundColor: '#ffffff',
    },
    text: {
        textAlign: 'center',
    }
});