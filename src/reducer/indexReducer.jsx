import {
    GET_SPORTS,
    GET_LEAGUES,
    GET_TEAMS,
    GET_PLAYERS}    from '../actions/indexAction';

const initialState = {
    leagues: [],
    sports: [],
    teams: [],
    players: [],

};

const indexReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SPORTS:
            return {
            ...state,
            sports: payload.map(sport => sport.strSport),
            };
        case GET_LEAGUES:
            return {
                ...state,
                leagues: payload,
            };
        case GET_TEAMS:
            return {
                ...state,
                teams: payload
            };
        case GET_PLAYERS:
            return {
                ...state,
                players: payload
            };
        default:
            return state;
    }
};

export default indexReducer;