import React from "react";
import "./SingleEvent.css";
import { NavLink } from "react-router-dom";

class SingleEvent extends React.Component {
  constructor(props) {
    super(props.perEvent);
    const perEvent = props.perEvent;
    this.state = {
      eventName: perEvent.eventName,
      eventStartDate: perEvent.eventStartDate,
      eventEndDate: perEvent.eventEndDate,
      address: perEvent.address,
      eventSummary: perEvent.eventSummary,
      eventId: perEvent.eventId,
      danceStyle: perEvent.danceStyle,
    };
  }
  render() {
    const eachEvent = this.state;
    return (
      <div className="singleEventCard">
        <div className="singleEventTextContainer">
          <div className="textOrder">
            <h2>{eachEvent.eventName}</h2>
            <h3>Event Location</h3>
            <p>{eachEvent.address}</p>
            <p>Dance Style: {eachEvent.danceStyle}</p>
            <p>Event Date: {eachEvent.eventStartDate}</p>
            <p>Event End Date: {eachEvent.eventEndDate}</p>
            <NavLink to={`/events/${eachEvent.eventId}`}>
              <button className="button">Find out more</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleEvent;
