import {ImageBackground, Pressable} from "react-native";
import {StyleSheet, Text, View} from "react-native";
import {PageControlView} from 'react-native-ios-kit';
import React, {useEffect, useState} from "react";

import {useSelector} from 'react-redux';


export default function EquipeScreen({route}) {
    const max = 7;
    // @ts-ignore
    const equipeList = useSelector(state => state.equipeReducer.equipe);
        //TODO
    const data1 = [
        {id:1, equipe1: 'FC Barcelone', equipe2: 'Paris', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'},
        {id:2, equipe1: 'Lyon', equipe2: 'FC Barcelone', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'},
        {id:3, equipe1: 'FC Barcelone', equipe2: 'Paris', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'},
        {id:4, equipe1: 'FC Barcelone', equipe2: 'Paris', score1: 1, score2: 1, date: new Date(), competition: 'RocketLeague'},
        {id:5, equipe1: 'Lyon', equipe2: 'FC Barcelone', score1: 1, score2: 0, date: new Date(), competition: 'RocketLeague'}];
    const [victoire, setVictoire] = useState(0);
    const [defaite, setDefaite] = useState(0);
    const [nul, setNul] = useState(0);
    let win = 0;
    let loose = 0;
    let matchNul = 0;
    data1.forEach((item) => {
        if(item.score1==item.score2){
            matchNul++;
        }
        else if (item.equipe1 === route.params.equipe.name && item.score1 > item.score2) {
            win++;
        } else if (item.equipe2 === route.params.equipe.name && item.score2 > item.score1) {
            win++;
        }
        else{
            loose++;
        }
    });
    if(win!=victoire){
        setVictoire(win);
    }
    if(loose!=defaite){
        setDefaite(loose);
    }
    if(matchNul!=nul){
        setNul(matchNul);
    }
    return (
        <ImageBackground source={require('../assets/images/backgroundImage.png')}  style={styles.body}>
            <Text style={styles.title}>{route.params.equipe.name}</Text>
            <View style={styles.pageControl}>
                <PageControlView style={styles.control} defaultPage={1}>
                    {data1.map((item) => {
                        return (
                            <>
                                <Pressable onPress={() => {console.log("press" + item.id)}} style={styles.container}>
                                    <View style={styles.header}>
                                        {item.equipe1.length > max ? <Text style={styles.headerDetail}>{item.equipe1.substring(0,max)+'..'}</Text>:
                                            <Text style={styles.headerDetail}>{item.equipe1}</Text>}
                                        <Text></Text>
                                        {item.equipe2.length > max ? <Text style={styles.headerDetail}>{item.equipe2.substring(0,max)+'..'}</Text>:
                                            <Text style={styles.headerDetail}>{item.equipe2}</Text>}
                                    </View>
                                    <View style={styles.score}>
                                        <Text style={styles.scoreDetail}>{item.score1}</Text>
                                        <Text style={styles.tiret}>-</Text>
                                        <Text style={styles.scoreDetail}>{item.score2}</Text>
                                    </View>
                                    <View style={styles.date}>
                                        <Text> {item.date.toLocaleDateString('fr')}</Text>
                                    </View>
                                </Pressable>

                                <View style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                                    {item.equipe1 === route.params.equipe.name && item.score1 > item.score2 ||
                                    item.equipe2 === route.params.equipe.name && item.score2 > item.score1 ?
                                        <View style={styles.CircleShapeWin}/> :
                                        item.score1 == item.score2 ? <View style={styles.CircleShapeNul}/> : <View style={styles.CircleShapeLoose}/>}
                                </View>
                            </>
                        );
                    })}
                </PageControlView>
            </View>
                <Text style={styles.title}>Statistiques{"\n"}</Text>
                <View style={styles.stats}>
                    <View style={styles.statContainer}>
                        <Text style={styles.statDetail}>Victoires : {victoire}</Text>
                        <Text style={styles.statDetail}>Défaites : {defaite}</Text>
                        <Text style={styles.statDetail}>Match nul : {nul}</Text>
                    </View>
                    <View style={styles.statContainer}>
                        <Text style={styles.statDetail}>Total de matchs : {defaite+victoire+nul}</Text>
                        <Text style={styles.statDetail}>Nombre de points : {victoire*3+nul}</Text>
                    </View>
                </View>
        </ImageBackground>
    );
    }

    const styles = StyleSheet.create({
        body: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        pageControl: {
            height: 300,
        },
        header: {
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        headerDetail: {
            fontSize: 15,
            paddingRight: 20,
            paddingLeft: 20,
        },
        score: {
          display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 10,
        },
        scoreDetail: {
            paddingRight: 45,
            fontSize: 25,
            fontWeight: 'bold',
            paddingLeft: 45,
        },
        tiret: {
            fontSize: 25,
            fontWeight: 'bold',
            justifyContent: 'space-around',
        },
        title: {
            marginTop: 50,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#FFF',
        },
        stats: {
          width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        statDetail: {
          color: '#FFF',
            padding: 10,
        },
        statContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        control: {
            width: '100%',
            orientation: 'horizontal',
        },
        date: {
            display:"flex",
            alignItems: 'center',
            marginTop: 30,
            justifyContent: "flex-start",
        },
        container: {
            marginTop: 50,
            width: '100%',
            height: 300,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            zIndex:1
        },
        CircleShapeLoose: {
            width: 250,
            height: 250,
            position: 'absolute',
            borderRadius: 250 / 2,
            backgroundColor: '#FF9800',
            shadowColor: "#00f",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
        },
        CircleShapeWin: {
            width: 250,
            height: 250,
            position: 'absolute',
            borderRadius: 250 / 2,
            backgroundColor: '#00FF0F',
            shadowColor: "#f00",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
        },
        CircleShapeNul: {
            width: 250,
            height: 250,
            position: 'absolute',
            borderRadius: 250 / 2,
            backgroundColor: 'lightgrey',
            shadowColor: "#0f0",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
        },
    });