import {Pressable, ScrollView, StyleSheet, Text} from "react-native";
import React, {useEffect} from "react";
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {useSelector} from "react-redux";
import {Classement} from "../model/Classement";
import {Equipe} from "../model/Equipe";
import EquipeScreen from "./EquipeScreen";

const tableHead = ['#', 'Equipe', 'P', 'MJ'];

export default function ClassementScreen({navigation, route}) {
    const competition = route.params.competition;
    const equipes: Equipe[] = useSelector(state => state.equipeReducer.equipes);

    useEffect(() => {
        navigation.getParent().setOptions({
            headerShown: false,
        });
        navigation.setOptions({
            headerTitle: competition.label,
        });
    }, [])


    function onPressItem(equipe: Equipe) {
        navigation.navigate("EquipeScreen", {"equipe": equipe});
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
        <Table style={styles.table}>
            <Row data={tableHead} widthArr={[40,250, 55,55]} style={styles.header} textStyle={styles.headerText}/>

            <ScrollView>
                {
                    classements.map((rowData, index) => (
                        <Pressable key={index} style={styles.row} onPress={() => onPressItem(rowData.equipe)}>

                            <Cell width={40} textStyle={styles.text} data={rowData.position}/>
                            <Cell width={250} textStyle={styles.text} data={rowData.equipe.name}/>
                            <Cell textStyle={styles.text} data={rowData.nombrePoints}/>
                            <Cell textStyle={styles.text} data={rowData.matchJoue}/>
                        </Pressable>

                    ))
                }
            </ScrollView>
        </Table>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#e8e8e8',
    },

    headerText: {
        textAlign: 'left',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    },
    table: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    row: {
        height: 40,
        flexDirection: 'row',
        display: 'flex',
    },
    text: {
        textAlign: 'left',
        paddingLeft: 10,
        paddingRight: 10,
    }
});