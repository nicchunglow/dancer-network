/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from "react";
import "./FullEventDisplay.css";
import { NavLink } from "react-router-dom";

function singleEventFullDetails({ perEvent }) {
  const {
    eventName,
    eventStartDate,
    eventEndDate,
    location,
    eventSummary,
    danceStyle,
    eventOwner,
    // eslint-disable-next-line no-unused-vars
    eventId
  } = perEvent;
  return (
    <div className="fullDisplayCard">
      <div className="fullDisplayTextContainer">
        <h2>{eventName}</h2>
        <h3>Location :{location}</h3>
        <h3>Start Date: {eventStartDate}</h3>
        <h3>End Date: {eventEndDate}</h3>
        <h3>danceStyle: {danceStyle}</h3>
        <h4>By: {eventOwner}</h4>
        <p>{eventSummary}</p>
        <NavLink to={"/events/:id"}>
          <button className="fullDisplayButton">Join now! </button>
        </NavLink>
      </div>
    </div>
  );
}
export default singleEventFullDetails;
