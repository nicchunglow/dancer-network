import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return <header className="Header">
    <img alt="name" src={process.env.PUBLIC_URL + "/dancer-network.png"}/>
    <Link to="/events/create">
      <Button className="button" input="Create Event"/>
    </Link>
    <ul><img alt="name" src="https://img.icons8.com/metro/26/000000/menu.png"/>
      <li><Link to="/">Home</Link>
        <ul><Link to="/events/create">Create Event</Link></ul>
        <ul><Link to="/events">All Events</Link></ul>
      </li>

    </ul>
  </header>;
};

export default Header
;
