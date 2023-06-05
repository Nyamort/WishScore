import {FlatList} from "react-native";
import {StyleSheet, Text, View} from "react-native";
import {RowItem, PageControlView} from 'react-native-ios-kit';
import {Rows} from "react-native-table-component";
import React from "react";

import {useSelector} from 'react-redux';


export default function EquipeScreen({route}) {
    // useEffect(
    //     () => {
    //         console.log("Props : " + props.equipe);
    //     },[props]
    // )
    const equipeList = useSelector(state => state.equipeReducer.equipe);
    // console.log(equipeList);
    export default function EquipeScreen({route}) {
        //TODO
        const data1 = [{
            equipe1: 'Lyon',
            equipe2: 'Paris',
            score1: 1,
            score2: 0,
            date: new Date(),
            competition: 'RocketLeague'
        },
            {equipe1: 'Lyon', equipe2: 'Paris', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'},
            {equipe1: 'Lyon', equipe2: 'Paris', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'},
            {equipe1: 'Lyon', equipe2: 'Paris', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'},
            {equipe1: 'Lyon', equipe2: 'Paris', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'},
            {equipe1: 'Lyon', equipe2: 'Paris', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'}];

        return (
            <View style={styles.body}>
                <Text style={styles.title}>{route.params.equipe}</Text>
                <PageControlView style={styles.control} defaultPage={1}>
                    {data1.map((item) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.header}>
                                    <Text>{item.equipe1}</Text>
                                    <Text></Text>
                                    <Text>{item.equipe2}</Text>
                                </View>
                                <View style={styles.header}>
                                    <Text>{item.score1}</Text>
                                    <Text style={styles.tiret}>-</Text>
                                    <Text>{item.score2}</Text>
                                </View>
                                <Text style={styles.header}> {item.date.toLocaleDateString('fr')}</Text>
                            </View>
                        );
                    })}
                </PageControlView>
            </View>
        );
    }

    const styles = StyleSheet.create({
        body: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        tiret: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        title: {
            marginTop: 50,
            fontSize: 30,
            fontWeight: 'bold',
        },
        control: {
            width: '100%',
            scrollEnabled: true,
            orientation: 'horizontal',
        },
        container: {
            marginTop: 50,
            width: '100%',
            color: 'red',
        }
    });
}