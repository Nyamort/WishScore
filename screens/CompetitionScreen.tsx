import {FlatList} from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {Sport} from "../model/Sport";
import {useSelector} from "react-redux";

type CompetitionScreenProps = {
    sport: Sport
}

export default function CompetitionScreen(props: CompetitionScreenProps) {
    const navigation = useNavigation();

    // @ts-ignore
    const selectedSport = props.sport;

    // @ts-ignore
    const competitions = useSelector(state => state.competitionReducer.competitions);
    const [filteredCompetition, setFilteredCompetition] = useState([]); // Liste filtrée des données

    const filterData = (filter) => {
        const filtered = competitions.filter((item) => {
            return item.sportId == filter.id;

        });
        setFilteredCompetition(filtered);
    };

    useEffect(() => {
        filterData(selectedSport);
    }, [selectedSport]);

    useFocusEffect(() => {
        navigation.getParent().setOptions({
            headerShown: true,
        });
    });

    return (
        <FlatList
            data={filteredCompetition}
            renderItem={({item}) => <CompetitionListItem competition={item}></CompetitionListItem>}
            keyExtractor={item => item.id.toString()}
        />
    );
}