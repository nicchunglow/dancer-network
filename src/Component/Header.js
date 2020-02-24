import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className="Header">
    <ul><img alt="name" src="https://img.icons8.com/metro/26/000000/menu.png"/>
      <li>
        <ul><Link to="/users/login">Login?</Link></ul>
        <ul><Link to="/users/register">Join As User</Link></ul>
        <ul><Link to="/events/create">Create Event</Link></ul>
        <ul><Link to="/events">All Events</Link></ul>
      </li>
    </ul>
    <Link to="/events/create">
      <button className="create-event-button">Create Event</button>
    </Link>
    <img alt="name" className="brandLogo" src={process.env.PUBLIC_URL + "/dancer-network.png"}/>
  </header>;
};

export default Header
;
