import {Competition} from "../navigation/CompetitionNavigation";
import {FlatList} from "react-native";
import CompetitionListItem from "../components/CompetitionListItem";

type CompetitionScreenProps = {
    competitions: Competition[]
}

export default function CompetitionScreen(props: CompetitionScreenProps) {

    return (
        <FlatList
            data={props.competitions}
            renderItem={({item}) => <CompetitionListItem name={item.title}></CompetitionListItem>}
            keyExtractor={item => item.id.toString()}
        />
    );
}