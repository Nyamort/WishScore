import {FlatList, StyleSheet, Text, View} from "react-native";
import {FavoriItem} from "./FavoriItem";

type FavorisCategorieProps = {
    categorie: string;
    favoris: any[];
}

export function FavorisCategorie(props: FavorisCategorieProps){
    return (
        <View style={styles.conatiner}>
            <Text style={styles.title}>{props.categorie}</Text>
            <FlatList
                data={props.favoris}
                contentContainerStyle={styles.list}
                renderItem={({item}) => <FavoriItem favori={item}/>}
                ListEmptyComponent={() => <Text style={styles.emptyFavoris}>Aucun favori</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: "#eaeaea",
    },
    conatiner: {
        gap: 10,
    },
    list: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    emptyFavoris: {
        fontSize: 15,
        color: '#0f2d37',
        fontWeight: '500',
        textAlign: 'center',
    }
})