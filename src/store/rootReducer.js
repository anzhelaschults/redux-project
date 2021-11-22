import {combineReducers} from "redux"
import {usersReducer} from "./Users/usersReducer"
import {postsReducer} from "./Posts/postsReducer"
import {commentsReducer} from "./Comments/commentsReducer"

// export const store = createStore(usersReducer, postsReducer, commentsReducer, applyMiddleware(thunk, logger))

export const RootReducer = combineReducers({

        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
)

