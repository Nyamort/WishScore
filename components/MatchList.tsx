import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Match} from "../model/Match";
import {useRoute} from "@react-navigation/native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

type MatchListProps = {
    item: Match,
    // key: number,
    nameID: string,
    name1: string,
    name2: string,

}
export default function MatchList(props: MatchListProps) {
    const route = useRoute();
    const {item, name1, name2} = props;
    const max = 7;
    return (
        <>
            <Pressable onPress={() => {
                console.log("press" + item.id)
            }} style={styles.container}>
                <View style={styles.header}>
                    {name1.length > max ? <Text style={styles.headerDetail}>
                            {name1.substring(0, max) + '..'}</Text> :
                        <Text style={styles.headerDetail}>{name1}</Text>}
                    <Text></Text>
                    {name2.length > max ? <Text style={styles.headerDetail}>
                            {name2.substring(0, max) + '..'}</Text> :
                        <Text style={styles.headerDetail}>{name2}</Text>}
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoreDetail}>{item.score1}</Text>
                    <Text style={styles.tiret}>-</Text>
                    <Text style={styles.scoreDetail}>{item.score2}</Text>
                </View>
                <View style={styles.date}>
                    <Text> {item.date_match.toLocaleDateString('fr')}</Text>
                </View>
            </Pressable>
            <View style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                {item.equipe1Id === props.nameID && item.score1 > item.score2 ||
                item.equipe2Id === props.nameID && item.score2 > item.score1 ?
                    <View style={styles.CircleShapeWin}/> :
                    item.score1 == item.score2 ? <View style={styles.CircleShapeNul}/> :
                        <View style={styles.CircleShapeLoose}/>}
            </View>
        </>
    )
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
        display: "flex",
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
        zIndex: 1
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