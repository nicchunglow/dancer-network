import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className="header">
    <img alt="name" src={process.env.PUBLIC_URL + "/dancer-network.png"}/>
    <Link to="/">Home</Link>
    <Link to="/CreateEvent">Create Event</Link>
    <Link to="/EventGallery">All Events</Link>
  </header>;
};

export default Header
;
