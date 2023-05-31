import { StyleSheet } from 'react-native';
import Navigation from "./navigation/Navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
    return (
    <SafeAreaProvider>
            <Navigation/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});
