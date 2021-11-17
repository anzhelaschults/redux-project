import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PostItem from "./PostItem";
import {getPostsByUserId} from "../../store/actionsCreator";
import Spinner from "../UI/Spinner";

//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },

const Posts = () => {

    const dispatch = useDispatch()

    const activeUser = useSelector(state => state.activeUser)
    const posts = useSelector(state => state.posts)
    const isLoading = useSelector(state => state.postsIsLoading)

    useEffect(() => {
        if (activeUser) dispatch(getPostsByUserId(activeUser.id))
    }, [activeUser])

    const renderPosts = () => {

        return isLoading
            ? <Spinner />
            : (
                <div className="list-group">
                    {posts.map(post => <PostItem key={post.id} post={post}/>)}
                </div>)
    }

    return !activeUser
        ? <h2>Choose User</h2>
        : renderPosts()
}

export default Posts