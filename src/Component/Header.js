import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return <div className='Header'>
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/CreateEvent">Create Event</Link>
      <Link to="/EventGallery">All Events</Link>
    </header>
  </div>;
};

export default Header
;
