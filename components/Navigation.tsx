import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {FontAwesome} from "@expo/vector-icons";

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

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} {...props} />;
}