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
                                               tabBarItemStyle: styles.tabBarStyle,
                                               tabBarLabelStyle: styles.tabBarLabelStyle,
                                               tabBarIcon: () => <TabBarIcon name="home" color={'white'}/>,
                                               headerRight: () => <SportHeader/>,
                                               headerStyle: styles.headerStyle,
                                               headerTitleStyle: styles.headerTitleStyle,
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