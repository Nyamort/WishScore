import {StyleSheet, Text, View} from "react-native";
import { EvilIcons } from '@expo/vector-icons';

export function SportModalHeader({close}){
    return (
        <View style={styles.container}>
            <EvilIcons name="close" onPress={close} size={35} color="black" />
            <Text style={styles.text}>Choisissez un sport</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        gap: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
    }
});