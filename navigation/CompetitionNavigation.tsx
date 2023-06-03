import {createStackNavigator} from "@react-navigation/stack";
import {StyleSheet} from "react-native";
import MatchScreen from "../screens/MatchScreen";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CompetitionScreen from "../screens/CompetitionScreen";
import {Competition} from "../model/Competition";
import ClassementScreen from "../screens/ClassementScreen";
import EquipeScreen from "../screens/EquipeScreen";

//@ts-ignore
const CompetitionList: Competition[] = [
    {title: "Ligue1", sport: "foot", id: 1},
    {title: "Ligue2", sport: "foot", id: 2},
    {title: "NBA", sport: "basket", id: 3},
    {title: "Top14", sport: "rugby", id: 4},
    {title: "Tournois des VI nation", sport: "rugby", id: 5},
] as Competition[]

export default function CompetitionNavigation() {
    const Stack = createStackNavigator();
    //@ts-ignore
    const selectedSport = useSelector(state => state.sportReducer.selectedSport);

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


    if (filteredData.length === 0) {
        return (
            <></>
        )
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="List"
                options={{
                    headerShown: false,
                }}
            >
                {props => <CompetitionScreen competitions={filteredData}></CompetitionScreen>}
            </Stack.Screen>
            <Stack.Screen name={"EquipeScreen"} component={EquipeScreen}/>
            {filteredData.map((item) => (
                <Stack.Screen
                    key={item.id}
                    name={item.title}
                    component={ClassementScreen}
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