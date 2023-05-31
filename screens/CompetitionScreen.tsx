import { FlatList,Text } from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import React from "react";
import {CommonActions} from "@react-navigation/native";
export const CompetitionList : string[] = [
    "Ligue1",
    "Ligue2",
    "LigueEuropa",
    "ChampionsLeague"
]
export default function CompetitionScreen({navigation,dispatch}){
    var sport;
    var nav = navigation.dispatch(navigation.getParent().insertBeforeLast('Home', {item: sport}));

    var onChangeValue = ({viewableItems}) => {
        if (viewableItems.length > 0) {
            sport = viewableItems[0].item;
        }
    }

        return (
            <>
                <Text>{sport}</Text>
                <FlatList data={CompetitionList} renderItem={elt => <CompetitionListItem name={elt.item}/>}
                          keyExtractor={(item) => item} onViewableItemsChanged={dispatch()}/>

            </>
        );
    }