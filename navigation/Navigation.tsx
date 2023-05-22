import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import TabBarIcon from "../components/TabBarIcon";
import CompetitionScreen from "../screens/CompetitionScreen";
import { StyleSheet, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('foot');
    const [items, setItems] = useState([
        {label: 'Football', value: 'foot'},
        {label: 'Basketball', value: 'basket'},
        {label: 'Rugby', value: 'rugby'}
    ]);
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