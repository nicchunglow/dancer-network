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
    eventId,
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
      <NavLink to={`/events/${eventId}`}>
        <button className="button">Find out more</button>
      </NavLink>
    </div>
  );
}
export default SingleEvent;
