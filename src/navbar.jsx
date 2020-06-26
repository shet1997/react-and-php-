import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
   <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
         <li className="nav-item active">
            <NavLink className="nav-link" to="register">Register</NavLink>
         </li>
         <li className="nav-item">
            <NavLink className="nav-link" to="/">Login</NavLink>
         </li>
         <li className="nav-item">
            <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
         </li>
         <li className="nav-item">
            <NavLink className="nav-link" to="logout">Logout</NavLink>
         </li>
      </ul>
   </div>
</nav>
     );
}
 
export default Navbar;