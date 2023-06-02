import {Competition} from "../navigation/CompetitionNavigation";
import {FlatList} from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useEffect} from "react";

type CompetitionScreenProps = {
    competitions: Competition[]
}

export default function CompetitionScreen(props: CompetitionScreenProps) {
    const navigation = useNavigation();

    useFocusEffect(() => {
        navigation.getParent().setOptions({
            headerShown: true,
        });
    });

    return (
        <FlatList
            data={props.competitions}
            renderItem={({item}) => <CompetitionListItem name={item.title}></CompetitionListItem>}
            keyExtractor={item => item.id.toString()}
        />
    );
}