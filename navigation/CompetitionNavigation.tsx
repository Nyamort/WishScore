import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MatchScreen from "../screens/MatchScreen";
import React from "react";

export default function CompetitionNavigation(){
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Match" component={MatchScreen}/>
      </Stack.Navigator>
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