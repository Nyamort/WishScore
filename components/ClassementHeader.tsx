import {StyleSheet, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";


export function ClassementHeader () {
    const handleFavori = () => {

    }

    const isFavorite = false;

    return (
        <View style={styles.container}>
            <FontAwesome onPress={handleFavori} name={isFavorite ? "star" : "star-o"} size={25}
                         color={"#f5c518"} ba/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
    }
});