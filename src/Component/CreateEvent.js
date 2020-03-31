import React from "react";
import "./CreateEvent.css";
import axios from "../utils/axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
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
          address: ""
        }
      ]
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

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
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
      eventEndDate: this.state.eventEndDate
    };
    const res = await axios.post("/events/create", details);
    console.log(res);
  };

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
          <select onChange={this.onChangeDanceStyle}>
            <option>Hip Hop</option>
            <option>Popping</option>
            <option>Locking</option>
            <option>Waacking</option>
            <option>Krump</option>
            <option>Breaking</option>
            <option>All-styles</option>
          </select>
          Event at which country:
          <select onChange={this.onChangeLocation}>
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Japan</option>
          </select>
          <PlacesAutocomplete
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  {...getInputProps({ placeholder: "Type Event location" })}
                />
                {suggestions.map(suggestion => {
                  const style = { backgroundColor: suggestion.active ? "#f7f7f7" : "#000000" };

                  return <div key="" {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestions.description}</div>;
                })}
              </div>
            )}
          </PlacesAutocomplete>
          Event Summary :{" "}
          <textarea
            className="textSpace"
            type="text"
            placeholder="Share your Event Details"
            onChange={this.onChangeEventSummary}
          />
          Event Start Date :{" "}
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            onChange={this.onChangeEventStartDate}
          />
          Event End Date :{" "}
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            onChange={this.onChangeEventEndDate}
          />
          <button
            className="add-event"
            onClick={event => this.eventDetails(event)}
          >
            Create your event!
          </button>
        </div>
      </div>
    );
  }
}
export default CreateEvent;
