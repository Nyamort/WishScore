import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabBarIcon from "./TabBarIcon";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

