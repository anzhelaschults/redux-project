import React from "react"
import {Route} from "react-router-dom"
import Users from "../Users/UserMain"
import Posts from "../Posts/PostMain"
import Comments from "../Comments/CommentsMain"

// npm add react-router-dom@6 history@5

const RouterSwitch = () => {
    return (
        <div>
            <>
                <Route path="/" index element={<h1>My Redux Project</h1>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/comments" element={<Comments/>}/>

        </div>
)
}

export default RouterSwitch


