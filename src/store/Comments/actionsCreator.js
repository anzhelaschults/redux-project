import {CHANGE_ACTIVE_COMMENT, CHANGE_IS_LOADING, FETCH_COMMENTS} from "./actions"

// bez skobochek - logika, so skobochkami - value

export const getCommentsByUserId = (userId) => { // function that returns async anonymous function == closure
    return async dispatch => {     // output - closure: async anonymous function. dispach is argument which is callback function
        try {
            // here we call callback function dispatch
            dispatch(addComments([]))  // call function with value [empty array] and pass its output to the dispatch function
            dispatch(commentsIsLoadingToggle(true))

            setTimeout(async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments?userId=' + userId)
                const data = await response.json()
                await dispatch(addComments(data))
                dispatch(commentsIsLoadingToggle(false))
            }, 500)

        } catch (e) {
            console.log(e.message)
        }
    }
}

export const changeActiveComment = comment => {
    return async dispatch => {
        try {

            dispatch(setActiveComment(comment))
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?userId=' + comment.id)
            const data = await response.json()
        } catch (e) {
            console.log(e.message)
        }
    }
}

const removeActiveComment = () => {
    return dispatch => {
        dispatch(setActiveComment(null))
    }
}

const addComments = data => {
    return {
        type: FETCH_COMMENTS,
        payload: data
    }
}

const commentsIsLoadingToggle = flag => {
    return {
        type: CHANGE_IS_LOADING,
        payload: flag
    }
}

const setActiveComment = data => {
    return {
        type: CHANGE_ACTIVE_COMMENT,
        payload: data
    }
}
