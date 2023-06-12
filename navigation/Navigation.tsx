import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import SportHeader from "../components/SportHeader";
import CompetitionNavigation from "./CompetitionNavigation";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import FavoriNavigation from "./FavoriNavigation";
import {FavoriScreen} from "../screens/FavoriScreen";


export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name="competitionNavigation"
                                           component={CompetitionNavigation}
                                           options={{
                                               title: 'Competition',
                                               tabBarItemStyle: styles.tabBarStyle,
                                               tabBarLabelStyle: styles.tabBarLabelStyle,
                                               tabBarIcon: () => <MaterialCommunityIcons name="stadium" size={24}
                                                                                         color="white"/>,
                                               headerRight: () => <SportHeader/>,
                                               headerStyle: styles.headerStyle,
                                               headerTitleStyle: styles.headerTitleStyle,
                                           }}/>
                <BottomTabNavigator.Screen name={"favoris"}
                                           component={FavoriScreen}
                                           options={{
                                               headerStyle: styles.headerStyle,
                                               headerTintColor: 'white',
                                               title: 'Favoris',
                                               tabBarItemStyle: styles.tabBarStyle,
                                               tabBarLabelStyle: styles.tabBarLabelStyle,
                                               tabBarIcon: () => <MaterialCommunityIcons name="star" size={24}
                                                                                         color="white"/>,
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#0f2d37',
    },
    headerTitleStyle: {
        color: 'white',
    },
    tabBarStyle: {
        backgroundColor: '#0f2d37',
    },
    tabBarLabelStyle: {
        color: 'white',
    }
});