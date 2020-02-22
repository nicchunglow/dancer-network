/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from "react";
import "./SingleEvent.css";
import Button from "./Button";

function SingleEvent({ perEvent }) {
  const {
    eventName,
    eventStartDate,
    eventEndDate,
    location,
    eventSummary,
    eventId
  } = perEvent;
  return (
    // <link to={`/events/${eventId}`}>
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
        <p>{eventSummary}</p>
        <p>{eventId}</p>
        <Button input="Join Event" />
      </div>
    </div>
    // </link>
  );
}
export default SingleEvent;
