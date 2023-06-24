import {Pressable, ScrollView, StyleSheet, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {useDispatch, useSelector} from "react-redux";
import {Classement} from "../model/Classement";
import {Equipe} from "../model/Equipe";
import EquipeScreen from "./EquipeScreen";
import {actionGetClassement} from "../redux/actions/classement/ActionGetClassement";
import {actionGetEquipe} from "../redux/actions/equipe/ActionGetEquipe";
import {Sport} from "../model/Sport";

const tableHead = ['#', 'Equipe', 'P', 'MJ'];

type classementType = {
    position: number,
    equipe: Equipe,
    nombrePoints: number,
    matchJoue: number
}
export default function ClassementScreen({navigation, route}) {
    const competition = route.params.competition;
    // @ts-ignore
    const equipes: Equipe[] = useSelector(state => state.equipeReducer.equipes);
    // @ts-ignore
    const classementList = useSelector(state => state.classementReducer.classements.filter((classement: Classement) => classement.competitionId === competition.id));
    const [classements, setClassements] = useState<Classement[]>(classementList);


    function onPressItem(id: string) {
        // @ts-ignore
        let equipe = equipes.find((equipe: Equipe) => equipe.id === id);
        navigation.navigate("EquipeScreen", {"id": equipe.id,"name": equipe.name});
    }

    const dispatch = useDispatch();

    useEffect(() => {
        const loadEquipe = async () => {
            // @ts-ignore
            await dispatch(actionGetEquipe());
        };
        loadEquipe();

        const loadClassement = async () => {
            // @ts-ignore
            await dispatch(actionGetClassement());
        };
        loadClassement();
        navigation.getParent().setOptions({
            headerShown: false,
        });
        navigation.setOptions({
            headerTitle: competition.label,
        });
    }, [dispatch]);

    useEffect(() => {
        if(equipes.length>0){
            // @ts-ignore
            setClassements(classements.filter((classement: Classement) => classement.competitionId === competition.id));
        }
        },[equipes]);



    return (
        <Table style={styles.table}>
            <Row data={tableHead} widthArr={[40,250, 55,55]} style={styles.header} textStyle={styles.headerText}/>

            <ScrollView>
                {
                    classements.map((rowData, index) => (
                        <Pressable key={index} style={styles.row} onPress={() => onPressItem(rowData.equipeId)}>
                            <Cell width={40} textStyle={styles.text} data={rowData.position}/>
                            <Cell width={250} textStyle={styles.text} data={equipes.find((equipe: Equipe)=> equipe.id === rowData.equipeId).name}/>
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