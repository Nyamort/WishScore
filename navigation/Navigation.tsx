import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { ComponentType, useState } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import TabBarIcon from "../components/TabBarIcon";
import CompetitionScreen from "../screens/CompetitionScreen";
import { StyleSheet, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import HomeScreen from "../screens/HomeScreen";
import {shouldThrowAnErrorOutsideOfExpo} from "expo/build/environment/validatorState";


export default function Navigation(){
    const BottomTabNavigator = createBottomTabNavigator();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('foot');
    const [items, setItems] = useState([
        {label: 'Football', value: 'foot'},
        {label: 'Basketball', value: 'basket'},
        {label: 'Rugby', value: 'rubgy'}
    ]);
    const [sport, setSport] = useState(items[0].value);

    function changeView(value) {
        setSport(value);
        return;
    }//redux
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name="Home" component={CompetitionScreen} initialParams={{sport: sport}}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                                               headerRight: () => (
                                                   <View style={styles.container}>
                                                       <DropDownPicker
                                                           onChangeValue={(value) => changeView(value)}
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