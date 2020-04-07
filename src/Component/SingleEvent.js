import React from "react";
import "./SingleEvent.css";
import { NavLink } from "react-router-dom";

function SingleEvent({ perEvent }) {
  const {
    eventName,
    eventStartDate,
    eventEndDate,
    address,
    eventSummary,
    eventId,
    danceStyle,
  } = perEvent;
  return (
    <div className="singleEventCard">
      <h2>{eventName}</h2>
      <div className="singleEventTextContainer">
        <div className="textOrder">
          <p>{eventId}</p>
          <h4>Event Venue :{address}</h4>
          <h5>Dance Style: {danceStyle}</h5>
          <p>Event Date: {eventStartDate}</p>
          <p>Event End Date: {eventEndDate}</p>
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
