import {createStackNavigator} from "@react-navigation/stack";
import {Platform, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CompetitionScreen from "../screens/CompetitionScreen";
import ClassementScreen from "../screens/ClassementScreen";
import EquipeScreen from "../screens/EquipeScreen";
import {ClassementHeader} from "../components/ClassementHeader";


export default function CompetitionNavigation() {
    const Stack = createStackNavigator();
    //@ts-ignore
    const selectedSport = useSelector(state => state.sportReducer.selectedSport);
    const [gesture, setGesture] = useState(false);
    useEffect(
        () => {
            if(Platform.OS == "ios"){
                setGesture(true);
            }
            else{
                setGesture(false);
            }
        }
    )

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTintColor: 'white',
                gestureEnabled: gesture,
            }}>
            <Stack.Screen
                name="listCompetition"
                options={{
                    headerShown: false,
                }}
            >
                {props => <CompetitionScreen sport={selectedSport}></CompetitionScreen>}
            </Stack.Screen>
            <Stack.Screen name={"EquipeScreen"} component={EquipeScreen}/>
            <Stack.Screen
                name="classement"
                component={ClassementScreen}
                options={{
                    headerRight: () => <ClassementHeader/>
                }}
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