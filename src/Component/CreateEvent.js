import React from "react";
import "./CreateEvent.css";
import axios from "axios";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [
        {
          eventName: "",
          eventSummary: "",
          danceStyle: "",
          location: "",
          eventStartDate: "",
          eventEndDate: "",
        },
      ],
    };
  }

  onChangeEventName = event => {
    this.setState({
      eventName: event.target.value
    });
  };

  onChangeEventSummary = event => {
    this.setState({
      eventSummary: event.target.value
    });
  };

  onChangeFirstName = event => {
    this.setState({
      danceStyle: event.target.value
    });
  };

  onChangeLocation = event => {
    this.setState({
      location: event.target.value
    });
  };

  onChangeEventStartDate = event => {
    this.setState({
      eventStartDate: event.target.value
    });
  };

  onChangeEventEndDate = event => {
    this.setState({
      eventEndDate: event.target.value
    });
  };

  eventDetails = async event => {
    const details = {
      eventName: this.state.eventName,
      danceStyle: this.state.danceStyle,
      location: this.state.location,
      eventSummary: this.state.eventSummary,
      eventStartDate: this.state.eventStartDate,
      eventEndDate: this.state.eventEndDate,
    };
    const res = await axios.post("https://dancer-network.herokuapp.com/events/create", details);
    console.log(res);
  }

  render() {
    return (
      <div className="create-event-card">
        <div className="create-event">
          <h2>Create Event</h2>
        Event Name :
          <input
            type="text"
            placeholder="Event Name"
            onChange={this.onChangeEventName}
          />
          Dance Style:
          <select
            onChange={this.onChangeDanceStyle}
          >
            <option>Hip Hop</option>
            <option>Popping</option>
            <option>Locking</option>
            <option>Waacking</option>
            <option>Krump</option>
            <option>Breaking</option>
            <option>All-styles</option>
          </select>
          Event at which country:
          <select
            onChange={this.onChangeLocation}
          >
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Japan</option>
          </select>
          Event Summary : <textarea
            className="textSpace"
            type="text"
            placeholder="Share your Event Details"
            onChange={this.onChangeEventSummary}
          />
          Event Start Date : <input
            type="text"
            placeholder="YYYY-MM-DD"
            onChange={this.onChangeEventStartDate}
          />
          Event Start Date : <input
            type="text"
            placeholder="YYYY-MM-DD"
            onChange={this.onChangeEventEndDate}
          />
          <button className="add-event" onClick={event => this.eventDetails(event)}>Create your event!</button>
        </div>
      </div>
    );
  }
}
export default CreateEvent;
