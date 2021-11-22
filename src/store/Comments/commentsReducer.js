import {CHANGE_ACTIVE_COMMENT, CHANGE_IS_LOADING, FETCH_COMMENTS,} from "./actions";

const initialState = {
    users: [],
    activeUser: null,
}

export const commentsReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_COMMENTS:
            return {...state, comments: payload}

        case CHANGE_IS_LOADING:
            return {...state, commentsIsLoading: payload}

        case CHANGE_ACTIVE_COMMENT:
            return {...state, activeComment: payload}

        default:
            return state
    }
}