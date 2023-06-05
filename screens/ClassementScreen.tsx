import {Pressable, StyleSheet, Text} from "react-native";
import React, {useEffect} from "react";
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {useSelector} from "react-redux";
import {Classement} from "../model/Classement";
import {Equipe} from "../model/Equipe";
import EquipeScreen from "./EquipeScreen";

const tableHead = ['#', 'Equipe', 'Points', 'Matchs joués'];

export default function ClassementScreen({navigation, route}) {

    const competition = route.params.competition;

    // @ts-ignore
    const equipes: Equipe[] = useSelector(state => state.equipeReducer.equipes);

    useEffect(() => {
        navigation.getParent().setOptions({
            headerShown: false,
        });
    }, [])


    function onPressItem(equipe: Equipe) {
        navigation.navigate(EquipeScreen, {equipe});
    }

    // @ts-ignore
    const classementList = useSelector(state => state.classementReducer.classements);
    let classements = classementList.filter((classement: Classement) => classement.competitionId === competition.id);
    classements = classements.map((classement: Classement) => {
        return {
            position: classement.position,
            equipe: equipes.find((equipe) => equipe.id === classement.equipeId),
            nombrePoints: classement.nombrePoints,
            matchJoue: classement.matchJoue
        };
    });


    return (
        <Table>
            <Row data={tableHead} style={styles.header} textStyle={styles.headerText}/>
            {
                classements.map((rowData, index) => (
                    <Pressable key={index} style={styles.row} onPress={() => onPressItem(rowData.equipe)}>

                        <Cell textStyle={styles.text} data={rowData.position}/>
                        <Cell data={rowData.equipe.name}/>
                        <Cell textStyle={styles.text} data={rowData.nombrePoints}/>
                        <Cell textStyle={styles.text} data={rowData.matchJoue}/>
                    </Pressable>

                ))
            }
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
        flexDirection: 'row',
        display: 'flex',
    },
    text: {
        textAlign: 'center',
    }
});