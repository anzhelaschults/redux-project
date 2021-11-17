import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import {changeActivePost, removeActivePost} from "../../store/actionsCreator";

export default ({post}) => {

    const dispatch = useDispatch()
    const activePost = useSelector(state => state.activePost) ?? {}


    const clickPostHandler = () => {
        dispatch(changeActivePost(post))
    }


    return (
        <>
            <div
                style={{cursor: 'pointer'}}
                className={`list-group-item ${post.id===activePost.id ? 'list-group-item active': ''}`}
                onClick={clickPostHandler}
            >
               <span>Title: {post.title}</span><br/>
                <span>Description: {post.body}</span>

            </div>
        </>

    )
}