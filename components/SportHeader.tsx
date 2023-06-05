import DropDownPicker from "react-native-dropdown-picker";
import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SPORT_CHANGED} from "../constantes";
import {initialState} from "../redux/reducers/sportReducer";

const items = [
    {label: 'Football', value: 'foot'},
    {label: 'Basketball', value: 'basket'},
    {label: 'Rugby', value: 'rugby'}
];

export default function SportHeader() {
    const dispatch = useDispatch();
    const selectedSport = useSelector(state => state.sportReducer.selectedSport);
    const [value, setValue] = useState(selectedSport);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch({type: SPORT_CHANGED, payload: value});
    }, [value]);

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    button: {}
});