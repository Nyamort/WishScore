import {Pressable, StyleSheet, Text, View} from "react-native";
import {EvilIcons} from "@expo/vector-icons";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {Sport} from "../model/Sport";
import {SPORT_CHANGED} from "../constantes";
import {Equipe} from "../model/Equipe";
import {Competition} from "../model/Competition";

type FavoriItemProps = {
    favori: any;
}

export function FavoriItem(props: FavoriItemProps){
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handlePress = () => {
        if(props.favori as Sport){
            dispatch({type: SPORT_CHANGED, payload: props.favori});
            navigation.navigate('listCompetition', {sport: props.favori});
        }else if (props.favori as Equipe){
            navigation.navigate('EquipeScreen', {equipe: props.favori});
        }else if (props.favori as Competition){
            navigation.navigate('competition', {competition: props.favori});
        }
    }

    return (
        <Pressable onPress={handlePress} style={styles.container}>
            <Text style={styles.text}>{props.favori.label}</Text>
            <EvilIcons name={'chevron-right'} size={30} color={'#0f2d37'}/>
        </Pressable>
    )
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
        fontSize: 15,
        color: '#0f2d37',
        fontWeight: '500',
    }
})