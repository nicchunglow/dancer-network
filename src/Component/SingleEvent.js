/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from "react";
import "./SingleEvent.css";
import { NavLink } from "react-router-dom";

function SingleEvent({ perEvent }) {
  const {
    eventName,
    eventStartDate,
    eventEndDate,
    location,
    eventSummary,
    // eslint-disable-next-line no-unused-vars
    eventId
  } = perEvent;
  return (
    <div className="card">
      <div className="text-container">
        <img
          alt="eventName"
          src={process.env.PUBLIC_URL + "/EventPicture.jpg"}
        />
        <h2>{eventName}</h2>
        <h3>Location :{location}</h3>
        <h3>Start Date: {eventStartDate}</h3>
        <h3>End Date: {eventEndDate}</h3>
        <p>{eventSummary}</p>
        <NavLink to={"/events/"}>
          <button className="button">Find out more</button>
        </NavLink>
      </div>
    </div>
  );
}
export default SingleEvent;
