import {createStackNavigator} from "@react-navigation/stack";
import {StyleSheet} from "react-native";
import MatchScreen from "../screens/MatchScreen";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CompetitionScreen from "../screens/CompetitionScreen";

export type Competition = {
    title: string
    sport: string
    id: number
}

export const CompetitionList: Competition[] = [
    {title: "Ligue1", sport: "foot", id: 1},
    {title: "Ligue2", sport: "foot", id: 2},
    {title: "NBA", sport: "basket", id: 3},
    {title: "Top14", sport: "rugby", id: 4},
    {title: "Tournois des VI nation", sport: "rugby", id: 5},
] as Competition[]

export default function CompetitionNavigation() {
    const Stack = createStackNavigator();
    const selectedSport = useSelector(state => state.appReducer.selectedSport);

    const [data, setData] = useState(CompetitionList); // Liste complète des données
    const [filteredData, setFilteredData] = useState([]); // Liste filtrée des données
    const filterData = (filter) => {
        const filtered = data.filter((item) => {
            return item.sport == filter;

        });
        setFilteredData(filtered);
    };
    useEffect(() => {
        filterData(selectedSport);
    }, [selectedSport]);


    if(filteredData.length === 0){
        return (
            <></>
        )
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={() => <CompetitionScreen competitions={filteredData}></CompetitionScreen>} />
            {filteredData.map((item) => (
                <Stack.Screen
                    key={item.id}
                    name={item.title}
                    component={MatchScreen}
                />
            ))}
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    button: {}
});