import {StyleSheet, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import React, {useEffect} from "react";
import {useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
    addFavoriCompetition,
    removeFavoriCompetition
} from "../data/storage/FavoriStorage";
import {FAVORI_COMPETITION_ADD, FAVORI_COMPETITION_REMOVE} from "../constantes";
import {Competition} from "../model/Competition";


export function ClassementHeader () {
    const route = useRoute();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = React.useState(route.params['isFavorite']);

    //@ts-ignore
    const favoritesCompetition = useSelector(state => state.favoriReducer.favoris.competition) as Competition[];

    const competition = route.params['competition'];

    useEffect(() => {
        setIsFavorite(favoritesCompetition.some(c => c.id === competition.id));
    }, [favoritesCompetition]);

    const handleFavori = () => {
        if (isFavorite) {
            removeFavoriCompetition(competition).then(r =>
                dispatch({type: FAVORI_COMPETITION_REMOVE, payload: competition})
            );
            setIsFavorite(false);
        } else {
            addFavoriCompetition(competition).then(r =>
                dispatch({type: FAVORI_COMPETITION_ADD, payload: competition})
            );
            setIsFavorite(true);
        }
    }

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