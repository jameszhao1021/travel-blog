// import React from "react";
// import { Link } from 'react-router-dom';
// import * as userService from '../utilities/users-service';

// function NavBar({user, setUser}){

//     function handleLogOut() {
//         // Delegate to the users-service
//         userService.logOut();
//         // Update state will also cause a re-render
//         setUser(null);
//       }
//     return(
       
//         <nav>
//             <ul style={{display:'flex', listStyle:'none'}}>
//                 <li>
//                     <a href='/orders'>Order Histroy</a>
//                 </li>
//                 |
//                 <li>
//                    <a href='/orders/new'>New Order</a>
//                 </li>
//             </ul>
//             &nbsp;&nbsp;<span>Welcome, {user.name}</span>
//             &nbsp;&nbsp; <Link to="" onClick={handleLogOut}>Log Out</Link>
        
//         </nav>
     
       
//     )
// }


// export default NavBar

import { Link } from 'react-router-dom';

import * as userService from '../utilities/users-service';

const NavBar = ({user, setUser}) => {
    
    const handleLogout = () => {
        userService.logOut();
        setUser = nill;
    }
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            i refuse to use nbsp | i refuse to use nbsp
            <Link to="/orders/new">New Order</Link> | 
            <Link to="" onClick={handleLogout}>Logout { user.name }</Link> | 
        </nav>
    );
}
export default NavBar