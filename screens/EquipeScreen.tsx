import { Pressable} from "react-native";
import {StyleSheet, Text, View} from "react-native";
import {PageControlView} from 'react-native-ios-kit';
import React, {useRef, useState} from "react";
import Carousel from 'react-native-snap-carousel'

import {useSelector} from 'react-redux';
import {Match} from "../model/Match";
import MatchList, {ITEM_WIDTH, SLIDER_WIDTH} from "../components/MatchList";


export default function EquipeScreen({route}) {
    const max = 7;
    const isCarousel = useRef(null)
    // @ts-ignore
    const equipeList = useSelector(state => state.equipeReducer.equipes);
    // @ts-ignore
    const matchList = useSelector(state => state.matchReducer.match);
    let matchs = matchList.filter((match: Match) => match.equipe1Id === route.params.id || match.equipe2Id === route.params.id);
    matchs = matchs.slice(0,10);
    const [victoire, setVictoire] = useState(0);
    const [defaite, setDefaite] = useState(0);
    const [nul, setNul] = useState(0);
    let win = 0;
    let loose = 0;
    let matchNul = 0;
    matchs.forEach((item) => {
        if(item.score1==item.score2){
            matchNul++;
        }
        else if (item.equipe1Id === route.params.id && item.score1 > item.score2) {
            win++;
        } else if (item.equipe2Id === route.params.id && item.score2 > item.score1) {
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
    return (<View style={styles.body}>
            <Text style={styles.title}>{route.params.id}</Text>
            <View style={styles.pageControl}>
                {
                    equipeList ?
                        <Carousel
                            layout="tinder"
                            layoutCardOffset={9}
                            ref={isCarousel}
                            data={matchs}
                            renderItem={(info) => {
                                let name1 = equipeList.find((equipe) => equipe.id === info.item.equipe1Id).name;
                                let name2 = equipeList.find((equipe) => equipe.id === info.item.equipe2Id).name;
                                return <MatchList item={info.item} nameID={route.params.id} name1={name1} name2={name2}/>
                            }
                            }
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            inactiveSlideShift={0}
                            useScrollView={false}

                        />
                        : <></>
                }
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
            color: '#000',
        },
        stats: {
          width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        statDetail: {
          color: '#000',
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