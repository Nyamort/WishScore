import {createStackNavigator} from "@react-navigation/stack";
import {StyleSheet} from "react-native";
import MatchScreen from "../screens/MatchScreen";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CompetitionScreen from "../screens/CompetitionScreen";
import ClassementScreen from "../screens/ClassementScreen";
import EquipeScreen from "../screens/EquipeScreen";


export default function CompetitionNavigation() {
    const Stack = createStackNavigator();

    // @ts-ignore
    const selectedSport = useSelector(state => state.sportReducer.selectedSport);

    // @ts-ignore
    const competitions = useSelector(state => state.competitionReducer.competitions);
    const [filteredCompetition, setFilteredCompetition] = useState([]); // Liste filtrée des données

    const filterData = (filter) => {
        const filtered = competitions.filter((item) => {
            return item.sportId == filter.id;

        });
        setFilteredCompetition(filtered);
    };

    useEffect(() => {
        filterData(selectedSport);
    }, [selectedSport]);


    if (filteredCompetition.length === 0) {
        return (
            <></>
        )
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTintColor: 'white',
            }}>
            <Stack.Screen
                name="List"
                options={{
                    headerShown: false,
                }}
            >
                {props => <CompetitionScreen competitions={filteredCompetition}></CompetitionScreen>}
            </Stack.Screen>
            <Stack.Screen name={"EquipeScreen"} component={EquipeScreen}/>
            <Stack.Screen
                name="competition"
                component={ClassementScreen}
            />
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

    headerStyle: {
        backgroundColor: '#0f2d37',
    },
    headerTitleStyle: {
        color: 'white',
    }
});