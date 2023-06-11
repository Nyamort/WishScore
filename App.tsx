import {StyleSheet} from 'react-native';
import Navigation from "./navigation/Navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import store from "./redux/store";
import {Provider} from "react-redux";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <Provider store={store}>
                <BottomSheetModalProvider>
                    <SafeAreaProvider>
                        <Navigation/>
                    </SafeAreaProvider>
                </BottomSheetModalProvider>
            </Provider>
        </GestureHandlerRootView>

    );
}

const styles = StyleSheet.create({});
