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

    <div className="singleEventCard">
      <h2>{eventName}</h2>
      <div className="singleEventTextContainer">
        <img
          alt="eventName"
          src={process.env.PUBLIC_URL + "/EventPicture.jpg"}
        />
        <div className="textOrder">
          <h3>Location :{location}</h3>
          <p>Start Date: {eventStartDate}</p>
          <p>End Date: {eventEndDate}</p>
          <p>{eventSummary}</p>
        </div>
      </div>
      <NavLink to={"/events/"}>
        <button className="button">Find out more</button>
      </NavLink>
    </div>
  );
}
export default SingleEvent;
