import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import CommentsItem from "./CommentsItem"
import {getCommentsByUserId} from "../../store/Comments/actionsCreator";
import Spinner from "../UI/Spinner"

// https://jsonplaceholder.typicode.com/comments
//  {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   }

const Comments = () => {
    const dispatch = useDispatch()

    const activeUser = useSelector(state => state.activeUser)
    const comments = useSelector(state => state.comments.comments)
    const isLoading = useSelector(state => state.comments.comments)

    useEffect(() => {
            if (activeUser) dispatch(getCommentsByUserId(activeUser.id))
        },
        [activeUser])

    const renderComments = () => {

        return isLoading
            ? <Spinner/>
            : (
                <div className="list-group">
                    {comments.map(comments => <CommentsItem key={comments.id} comments={comments}/>)}
                </div>
            )
    }
    return !activeUser
        ? <h2>Select a user to see the comments</h2>
        : renderComments
}

export default Comments