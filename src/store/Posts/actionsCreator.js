import {CHANGE_ACTIVE_POST, CHANGE_IS_LOADING, FETCH_POSTS,} from "./actions";


export const getPostsByUserId = (userId) => {
    return async dispatch => {
        try {
            dispatch(addPosts([]))
            dispatch(postsIsLoadingToggle(true))
            setTimeout(async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
                const data = await response.json()
                await dispatch(addPosts(data))
                dispatch(postsIsLoadingToggle(false))
            }, 500)

        } catch (e) {
            console.log(e.message)
        }
    }
}

export const changeActivePost = post => {
    return async dispatch => {
        try {

            dispatch(setActivePost(post))
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?postId=' + post.id)
            const data = await response.json()

        } catch (e) {
            console.log(e.message)
        }
    }
}

export const removeActivePost = () => {
    return dispatch => {
        dispatch(setActivePost(null))
    }
}

const addPosts = data => {
    return {
        type: FETCH_POSTS,
        payload: data
    }
}

const postsIsLoadingToggle = flag => {
    return {
        type: CHANGE_IS_LOADING,
        payload: flag
    }
}

const setActivePost = data => {
    return {
        type: CHANGE_ACTIVE_POST,
        payload: data
    }
}
