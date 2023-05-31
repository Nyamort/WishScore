import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabBarIcon from "../components/TabBarIcon";
import CompetitionScreen from "../screens/CompetitionScreen";
import { StyleSheet, View} from "react-native";
import { CommonActions } from '@react-navigation/native';
import DropDownPicker from "react-native-dropdown-picker";
import { createContext, useReducer } from 'react';

export default function Navigation({navigation}){
    const BottomTabNavigator = createBottomTabNavigator();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('foot');
    const [items, setItems] = useState([
        {label: 'Football', value: 'foot'},
        {label: 'Basketball', value: 'basket'},
        {label: 'Rugby', value: 'rugby'}
    ]);
    //============================creation du context===================================================================
    // @ts-ignore
    /*const DispatcherContext = createContext();
    navigation.dispatch((state) => {
        // Add the home route to the start of the stack
        const routes = [{ name: 'Home' }, ...state.routes];

        return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
        });
    });*/

    const insertBeforeLast = (routeName, params, props) => (state) => {
        const routes = [
            ...state.routes.slice(0, -1),
            { name: routeName, params },
            state.routes[state.routes.length - 1],
        ];

        return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
        });
    };

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={CompetitionScreen}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                                               headerRight: () => (
                                                   <View style={styles.container}>
                                                       <DropDownPicker
                                                           open={open}
                                                           value={value}
                                                           items={items}
                                                           setOpen={setOpen}
                                                           setValue={setValue}
                                                           setItems={setItems}/>
                                                   </View>

                                               ),

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