import {StyleSheet} from 'react-native';
import Navigation from "./navigation/Navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import store from "./redux/store";
import {Provider} from "react-redux";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <SafeAreaProvider>
                    <Navigation/>
                </SafeAreaProvider>
            </Provider>
        </>
    );
}

const styles = StyleSheet.create({});
