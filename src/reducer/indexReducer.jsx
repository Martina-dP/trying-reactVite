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

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPORTS:
            return {
                ...state,
                sports: action.payload
            };
        case GET_LEAGUES:
            return {
                ...state,
                leagues: action.payload
            };
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload
            };
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        default:
            return state;
    }
};

export default indexReducer;