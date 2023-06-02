import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import TabBarIcon from "../components/TabBarIcon";
import { StyleSheet} from "react-native";
import SportHeader from "../components/SportHeader";
import CompetitionNavigation from "./CompetitionNavigation";


export default function Navigation(){
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator >
                <BottomTabNavigator.Screen name="Home"
                                           component={CompetitionNavigation}
                                           options={{
                                               title: 'Accueil',
                                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                                               headerRight: () => <SportHeader/>,
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
});