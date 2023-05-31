import { FlatList,Text } from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
import {useEffect, useState} from "react";
import {CommonActions} from "@react-navigation/native";
export const CompetitionList = [
    {title:"Ligue1",sport:"foot"},
    {title:"Ligue2",sport:"foot"},
    {title:"NBA",sport:"basket"},
    {title:"Top14",sport:"rugby"},
    {title:"Tournois des VI nation",sport:"rugby"}
]
export default function CompetitionScreen(props){
        useEffect(() => {filterData(props.route.params.sport);
            console.log(props.route.params.sport);
        },[props])
        const [data, setData] = useState(CompetitionList); // Liste complète des données
        const [filteredData, setFilteredData] = useState([{title:"",sport:""}]);
        const filterData = (filter) => {
            const filtered = data.filter((item) => {
                return item.sport == filter;

            });
            setFilteredData(filtered);
        };
        return (
            <>
                <FlatList data={filteredData} renderItem={elt => <CompetitionListItem name={elt.item.title}/>}
                          keyExtractor={(item) => item.title}/>

            </>
        );
    }