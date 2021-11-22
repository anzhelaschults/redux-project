import React from "react"

import {useDispatch, useSelector} from "react-redux"
import {changeActiveComment} from "../../store/Comments/actionsCreator"

export default ({comment}) => {

    const dispatch = useDispatch()
    const activeComment = useSelector(state => state.activeComment) ?? {}

    const clickCommentHandler = () => {
        dispatch(changeActiveComment(comment))
    }

    return (
        <>
            <div
                style={{cursor: 'pointer'}}
                className={`list-group-item ${comment.id === activeComment.id ? 'list-group-item active' : ''}`}
                onClick={clickCommentHandler}
            >
                <span>Title: {comment.name}</span><br/>
                <span>Description: {comment.body}</span>

            </div>
        </>
    )
}