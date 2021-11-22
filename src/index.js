// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
//
//
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css';
//
// import App from './components/App';
// import {store} from "./store/store";
//
// // BrowserRouter - connects your app to the browser's URL
// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </BrowserRouter>
//     ,
//     document.getElementById('root')
// );


import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./components/App";
import UsersMain from "./components/Users/UserMain"
import PostMain from "./components/Posts/PostMain"
import CommentsMain from "./components/Comments/CommentsMain"
import {store} from "./store/store";
import {Provider} from "react-redux";

// BrowserRouter> - connect your app to the browser's URL


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
            <Routes>
                {/*<Route path="/" element={<App/>}/>*/}
                <Route path="users" element={<UsersMain/>}/>
                <Route path="posts" element={<PostMain/>}/>
                <Route path="comments" element={<CommentsMain/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>,
    rootElement
);




