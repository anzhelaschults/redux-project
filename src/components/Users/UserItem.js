import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {changeActiveUser} from "../../store/Users/actionsCreator"

export default ({user}) => {

    const dispatch = useDispatch()
    const activeUser = useSelector(state => state.activeUser) ?? {} // if nothing return empty object

    const changeUser = () => {
        dispatch(changeActiveUser(user))
    }

    return (
        <div
            style={{cursor: "pointer"}}
            className={`list-group-item ${user.id === activeUser.id ? 'list-group-item active' : ''}`}
            onClick={changeUser}
        >
            <span>Name: {user.name}</span><br/>
            <span>Username: {user.username}</span><br/>
            <span>Email: {user.email}</span><br/>
        </div>
    )
}