import {StyleSheet, Text, Pressable} from 'react-native'
import React from "react";
import {useNavigation} from "@react-navigation/native";

type CompetitionListProps = {
    name : string
}
export default function CompetitionListItem(props : CompetitionListProps) {
   
    const name = props.name;

    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Match',{})}>
            <Text>{name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 24,
        margin: 5,
        padding: 5,
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center'
    }
});