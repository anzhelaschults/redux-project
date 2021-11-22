import {CHANGE_ACTIVE_POST, CHANGE_IS_LOADING, FETCH_POSTS,} from "./actions";

const initialState = {
    posts: [],
    activePost: null,
}

export const postsReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_POSTS:
            return {...state, posts: payload}

        case CHANGE_IS_LOADING:
            return {...state, postsIsLoading: payload}

        case CHANGE_ACTIVE_POST:
            return {...state, activePost: payload}

        default:
            return state
    }
}