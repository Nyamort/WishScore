import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { ComponentType, useState } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import TabBarIcon from "../components/TabBarIcon";
import CompetitionScreen from "../screens/CompetitionScreen";
import { StyleSheet, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import HomeScreen from "../screens/HomeScreen";
import {shouldThrowAnErrorOutsideOfExpo} from "expo/build/environment/validatorState";
import SportHeader from "../components/SportHeader";


export default function Navigation(){
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name="Home"
                                           component={CompetitionScreen}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                                               headerRight: () => <SportHeader/>,

                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        width:"100%",
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    button:{

    }
});