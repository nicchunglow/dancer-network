import React from "react";
import "./FullEventDisplay.css";

function SingleEventFullDetails(perEvent) {
  const {
    eventName,
    eventStartDate,
    eventEndDate,
    location,
    eventSummary,
    danceStyle,
    eventOwner,
    eventId,
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
      </div>
    </div>
  );
}
export default SingleEventFullDetails;
