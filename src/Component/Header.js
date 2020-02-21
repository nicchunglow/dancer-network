import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className="Header">
    <img alt="name" src={process.env.PUBLIC_URL + "/dancer-network.png"}/>
    <ul><img alt="name" src={`${process.env.PUBLIC_URL}/meat.png`}/>
      <li><Link to="/">Home</Link>
        <ul><Link to="/CreateEvent">Create Event</Link></ul>
        <ul><Link to="/EventGallery">All Events</Link></ul>
      </li>

    </ul>
  </header>;
};

export default Header
;
