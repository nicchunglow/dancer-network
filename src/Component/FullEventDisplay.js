/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from "react";
import "./SingleEvent.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function SingleEvent({ perEvent }) {
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
    <div className="card">
      <img
        alt="eventName"
        src={process.env.PUBLIC_URL + "/EventPicture.jpg"}
      />
      <div className="text-container">
        <h2>{eventName}</h2>
        <h3>Location :{location}</h3>
        <h3>Start Date: {eventStartDate}</h3>
        <h3>End Date: {eventEndDate}</h3>
        <h3>danceStyle: {danceStyle}</h3>
        <h4>By: {eventOwner}</h4>
        <p>{eventSummary}</p>
        <NavLink to={"/events/:id"}>
          <Button input="join now!" />
        </NavLink>
      </div>
    </div>
  );
}
export default SingleEvent;
