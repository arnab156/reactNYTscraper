import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <div>
    <ul className="nav nav-pills nav-justified">
      <li className="nav-item">
       <h2 className= "text-xl-left text-black-50 "><Link to="/search">New York Times Article Scraper</Link> </h2> 
      </li>

      <li className="nav-item">
        <Link to="/search" />
      </li>

      <li className="nav-item text-light bg-dark">
         <Link to="/saved/">Saved</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
