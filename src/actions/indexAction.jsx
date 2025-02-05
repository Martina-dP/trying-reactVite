import axios from "axios";

export const GET_SPORTS = "GET_SPORTS";
export const GET_LEAGUES = "GET_LEAGUES";
export const GET_TEAMS = "GET_TEAMS";
export const GET_PLAYERS = "GET_PLAYERS";

export function getSports() {
    return async function(dispatch){
        var json = await axios.get("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")
        return dispatch({
            type : "GET_SPORTS",
            payload : json.data.leagues
        })
    }
}

export function getLeagues() {
    return async function(dispatch){
        var json = await axios.get("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")
        return dispatch({
            type : "GET_LEAGUES",
            payload : json.data
        })
    }
}

export function getTeams(sport,country) {
    return async function(dispatch){
        var json = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=${sport}&c=${country}`)
        console.log(json.data)
        return dispatch({
            type : "GET_TEAMS",
            payload : json.data
        })
    }
}

export function getPlayers(idTeam) {
    return async function(dispatch){
        var json = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=${idTeam}`)
        console.log(json.data)
        return dispatch({
            type : "GET_PLAYERS",
            payload : json.data
        })
    }
}
