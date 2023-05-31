import React from "react";
import { StyleSheet } from 'react-native';
import MatchItem, { MatchItemProps } from "../components/MatchItem";
import { FlatList } from "react-native";

export const MATCHLIST : MatchItemProps[] = [
   {equipe1 : "Saint-Etienne",equipe2 :"Lyon",score1 :5, score2:4},
  ]

export default function MatchScreen() {
    return (
        <FlatList data={MATCHLIST} renderItem={elt => <MatchItem equipe1={elt.item.equipe1} equipe2={elt.item.equipe2} 
        score1={elt.item.score1} score2={elt.item.score2}/>}/>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    centered: {
      alignItems: "center"
    },
    equipe: {
        display:"flex",
    },
    score: {
        display:"flex",
    }
  });