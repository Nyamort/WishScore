import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFavorisSport = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@favoris_sports')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.log(e);
    }
}

export const getFavorisTeam = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@favoris_teams')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.log(e);
    }
}

export const getFavoris = async () => {
    return {
        sports: await getFavorisSport(),
        teams: await getFavorisTeam()
    }
}

export const addFavoriSport = async (sport) => {
    try {
        const favoris = await getFavorisSport();
        favoris.push(sport);
        await AsyncStorage.setItem('@favoris_sports', JSON.stringify(favoris))
        return sport;
    } catch (e) {
        console.log(e);
    }
}

export const addFavoriTeam = async (team) => {
    try {
        const favoris = await getFavorisTeam();
        favoris.push(team);
        await AsyncStorage.setItem('@favoris_teams', JSON.stringify(favoris))
        return team;
    } catch (e) {
        console.log(e);
    }
}

export const removeFavoriSport = async (sport) => {
    try {
        const favoris = await getFavorisSport();
        const newFavoris = favoris.filter(f => f.id !== sport.id);
        await AsyncStorage.setItem('@favoris_sports', JSON.stringify(newFavoris))
        return sport;
    } catch (e) {
        console.log(e);
    }
}

export const removeFavoriTeam = async (team) => {
    try {
        const favoris = await getFavorisTeam();
        const newFavoris = favoris.filter(f => f.id !== team.id);
        await AsyncStorage.setItem('@favoris_teams', JSON.stringify(newFavoris))
        return team;
    } catch (e) {
        console.log(e);
    }
}

export const getFavorisCompetition = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@favoris_competitions')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.log(e);
    }
}

export const addFavoriCompetition = async (competition) => {
    try {
        const favoris = await getFavorisCompetition();
        favoris.push(competition);
        await AsyncStorage.setItem('@favoris_competitions', JSON.stringify(favoris))
        return competition;
    } catch (e) {
        console.log(e);
    }
}

export const removeFavoriCompetition = async (competition) => {
    try {
        const favoris = await getFavorisCompetition();
        const newFavoris = favoris.filter(f => f.id !== competition.id);
        await AsyncStorage.setItem('@favoris_competitions', JSON.stringify(newFavoris))
        return competition;
    } catch (e) {
        console.log(e);
    }
}

