import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabBarIcon from "../components/TabBarIcon";
import ClassementScreen from "../screens/Classement";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={ClassementScreen}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

