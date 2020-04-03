import React from "react";
import "./CreateEvent.css";
import instance from "../utils/axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventSummary: "",
      danceStyle: "Hip Hop",
      eventStartDate: "",
      eventEndDate: "",
      address: "",
      coordinates: { lat: "", lng: "" }
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

  onChangeDanceStyle = event => {
    this.setState({
      danceStyle: event.target.value
    });
  };

  handleChange = event => {
    this.setState({
      address: event
    });
  };

  handleSelect = async address => {
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    this.setState({
      address: address,
      coordinates: latLng
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
    const payload = {
      eventName: this.state.eventName,
      danceStyle: this.state.danceStyle,
      address: this.state.address,
      eventSummary: this.state.eventSummary,
      eventStartDate: this.state.eventStartDate,
      eventEndDate: this.state.eventEndDate,
      coordindates: this.state.coordinates
    };
    const res = await instance.post("/events/create", payload);
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
            <option>All-Styles</option>
          </select>
          <PlacesAutocomplete
            value={this.state.address}
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
                Location of event:
                <div>
                  {/* <p>lat :{this.state.coordinates.lat}</p>
                <p>lng :{this.state.coordinates.lng}</p> */}
                  <input
                    className="inputSpace"
                    {...getInputProps({ placeholder: "Type Event location" })}
                  />
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? "#EC9280" : "#fff"
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          Event Summary :
          <textarea
            className="textSpace"
            type="text"
            placeholder="Share your Event Details"
            onChange={this.onChangeEventSummary}
          />
          Event Start Date :
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            onChange={this.onChangeEventStartDate}
          />
          Event End Date :
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
