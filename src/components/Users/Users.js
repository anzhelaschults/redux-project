import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/actionsCreator";
import UserItem from "./UserItem";

//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }

// 1. Fetch user name, username, email

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    console.log("what exact data we fetch?.......", users)

    useEffect(() => {
        dispatch( getAllUsers() )
    }, [])

    const renderUsers = () => {
        return !users.length
            ? (<h2>No Users</h2>)
            : users.map(user => <UserItem key={user.id} user={user} />)
    }

    return (
        <div className="list-group">
            { renderUsers() }
        </div>
    )
}

export default Users