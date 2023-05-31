import {FlatList, Text} from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import {useEffect, useState} from "react";
import {CommonActions} from "@react-navigation/native";
import {useSelector} from "react-redux";

export const CompetitionList = [
    {title: "Ligue1", sport: "foot"},
    {title: "Ligue2", sport: "foot"},
    {title: "NBA", sport: "basket"},
    {title: "Top14", sport: "rugby"},
    {title: "Tournois des VI nation", sport: "rugby"}
]
export default function CompetitionScreen(props) {
    const selectedSport = useSelector(state => state.appReducer.selectedSport);

    const [data, setData] = useState(CompetitionList); // Liste complète des données
    const [filteredData, setFilteredData] = useState([{title: "", sport: ""}]);
    const filterData = (filter) => {
        const filtered = data.filter((item) => {
            return item.sport == filter;

        });
        setFilteredData(filtered);
    };
    useEffect(() => {
        filterData(selectedSport);
    }, [selectedSport]);
    return (
        <>
            <FlatList data={filteredData} renderItem={elt => <CompetitionListItem name={elt.item.title}/>}
                      keyExtractor={(item) => item.title}/>

        </>
    );
}