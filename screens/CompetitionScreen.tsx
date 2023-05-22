import { FlatList } from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";
export const CompetitionList : string[] = [
    "Ligue1",
    "Ligue2",
    "LigueEuropa",
    "ChampionsLeague"
]
export default function CompetitionScreen(){
   

    return (
        <>
            <FlatList data={CompetitionList} renderItem={elt => <CompetitionListItem name={elt.item}/>}
                keyExtractor={(item) => item}/>
        </>
    );
}