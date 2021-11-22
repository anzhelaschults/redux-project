import React from 'react';
// import NavBar from "/.Navigation/NavBar";
// import {Route, Routes} from "react-router-dom"
import {Link, Outlet} from "react-router-dom";

// render an Outlet in the App.jsx "parent" route.

export default function App() {
    return (
        <div>
            <h1>Social Media Activity</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/users">Users</Link> |{" "}
                <Link to="/posts">Posts</Link> |{" "}
                <Link to="/comments">Comments</Link>
            </nav>
            <Outlet/>
        </div>
    );
}


// function App() {
//     return (
//         <div className="container">
//             <NavBar/>
//             <div>
//                 <Routes>
//                     <Route path "/" index element {<UserMain/>}></Route>
//                     <Route path "/posts" element {<PostMain/>}></Route>
//                     <Route path "/comments" element {<CommentsMain/>}></Route>
//                 </Routes>
//             </div>

{/*    /!*<RouterSwitch/>*!/*/
}
{/*    <div className="row">*/
}
{/*        <div className="col">*/
}
{/*            <Users/>*/
}
{/*        </div>*/
}
{/*        <div className="col">*/
}
{/*            <Posts/>*/
}
{/*        </div>*/
}
{/*        <div className="col">*/
}
{/*            <Comments/>*/
}
{/*        </div>*/
}
// {/*    </div>*/}
//
// {/*</div>*/}
// );
// }

// export default App;


