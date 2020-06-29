import React from "react";
import "./Header.css";
import { Link, BrowserRouter } from "react-router-dom";
const Header = () => {
  return (
    <BrowserRouter>
      <header className="Header">
        <div className="divAlign">
          <ul>
            <img
              alt="menu"
              src="https://img.icons8.com/metro/26/000000/menu.png"
            />
            <li>
              <ul>
                <Link to="/">Home</Link>
              </ul>
              <ul>
                <Link to="/users/login">Login?</Link>
              </ul>
              <ul>
                <Link to="/users/register">Join As User</Link>
              </ul>
              <ul>
                <Link to="/events/create">Create Event</Link>
              </ul>
              <ul>
                <Link to="/events">All Events</Link>
              </ul>
            </li>
          </ul>
          <Link to="/events/create">
            <button className="create-event-button">Create Event</button>
          </Link>
        </div>
        <img
          alt="name"
          className="brandLogo"
          src={process.env.PUBLIC_URL + "/dancer-network.png"}
        />
      </header>
    </BrowserRouter>
  );
};

export default Header;
