
import {FlatList, ImageBackground} from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import {useFocusEffect, useIsFocused, useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {Competition} from "../model/Competition";

type CompetitionScreenProps = {
    competitions: Competition[]
}

export default function CompetitionScreen(props: CompetitionScreenProps) {
    const navigation = useNavigation();
    let sport = null;
    let list = [
        {image: require("../assets/images/background.png"), sport: "foot"},
        {image: require("../assets/images/background-basket.png"), sport: "basket"},
        {image: require("../assets/images/background.png"), sport: "rugby"}];
    const [image, setImage] = useState(require("../assets/images/background.png"));

    useFocusEffect(() => {
        navigation.getParent().setOptions({
            headerShown: true,
        });
        sport = props.competitions[0].sport;
        // @ts-ignore
        setImage(list.find((item) => item.sport == props.competitions[0].sport).image);
    });

    return (
        <ImageBackground source={image} style={{flex: 1}}>
            <FlatList
                data={props.competitions}
                renderItem={({item}) => <CompetitionListItem name={item.title}></CompetitionListItem>}
                keyExtractor={item => item.id.toString()}
            />
        </ImageBackground>
    );
}