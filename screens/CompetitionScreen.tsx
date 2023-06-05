import {FlatList} from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {Competition} from "../model/Competition";

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

    const competitionList = props.competitions;


    return (
        <FlatList
            data={competitionList}
            renderItem={({item}) => <CompetitionListItem competition={item}></CompetitionListItem>}
            keyExtractor={item => item.id.toString()}
        />
    );
}