import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFavoris} from "../data/storage/FavoriStorage";
import {FAVORIS_LOAD} from "../constantes";
import {FavorisCategorie} from "../components/FavorisCategorie";
import {Favoris} from "../redux/reducers/favoriReducer";

export function FavoriScreen() {

    const favoris = useSelector(state => state.favoriReducer.favoris) as Favoris
    const dispatch = useDispatch();

    useEffect(() => {
        const loadFavoris = () => {
            getFavoris().then(r =>
                dispatch({type: FAVORIS_LOAD, payload: r})
            );
        };
        loadFavoris();
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <FavorisCategorie categorie="Sport" favoris={favoris.sports}/>
            <FavorisCategorie categorie="Competition" favoris={favoris.competition}/>
            <FavorisCategorie categorie="Equipe" favoris={favoris.teams}/>
        </View>
    )
}

const styles = {
    container: {
        gap: 20,
    }
}