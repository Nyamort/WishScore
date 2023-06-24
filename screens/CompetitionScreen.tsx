import {FlatList} from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {Sport} from "../model/Sport";
import {useDispatch, useSelector} from "react-redux";
import {actionGetCompetition} from "../redux/actions/ActionGetCompetition";

type CompetitionScreenProps = {
    sport: Sport
}

export default function CompetitionScreen(props: CompetitionScreenProps) {
    const navigation = useNavigation();

    // @ts-ignore
    const selectedSport = props.sport;

    // @ts-ignore
    const competitions = useSelector(state => state.competitionReducer.competitions);

    const dispatch = useDispatch();
    const [filteredCompetition, setFilteredCompetition] = useState([]); // Liste filtrée des données

    const filterData = (filter) => {
        if(competitions.length === 0) return;
        const filtered = competitions.filter((item) => {
            return item.sportId == filter.id;

        });
        setFilteredCompetition(filtered);
    };

    useEffect(() => {
        filterData(selectedSport);
    }, [competitions,selectedSport]);

    useFocusEffect(() => {
        navigation.getParent().setOptions({
            headerShown: true,
        });
    });

    useEffect(() => {
        const loadCompetition = async () => {
            // @ts-ignore
            await dispatch(actionGetCompetition());
        };
        loadCompetition();
    }, [dispatch]);

    return (
        <FlatList
            data={filteredCompetition}
            renderItem={({item}) => <CompetitionListItem competition={item}></CompetitionListItem>}
            keyExtractor={item => item.id.toString()}
        />
    );
}