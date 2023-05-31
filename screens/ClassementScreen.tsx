import {StyleSheet} from "react-native";
import React from "react";
import {Table, Row, Rows} from 'react-native-table-component';

const classementScreen: any[] = [
    [1, 'FC Barcelone', 85, 35],
    [2, 'Real Madrid', 84, 35],
    [3, 'Atletico Madrid', 83, 35],
    [4, 'FC Seville', 82, 35],
    [5, 'Real Sociedad', 81, 35],
];

const tableHead = ['#', 'Equipe', 'Points', 'Matchs joués'];

export default function ClassementScreen() {
    return (
        <Table>
            <Row data={tableHead} style={styles.header} textStyle={styles.headerText}/>
            <Rows data={classementScreen} style={styles.row} textStyle={styles.text}/>
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