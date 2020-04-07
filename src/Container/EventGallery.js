import React from "react";
import axios from "../utils/axios";
import SingleEvent from "../Component/SingleEvent";
import MyMap from "../Component/MyMap";
import "../Container/EventGallery.css";
import ReactLoading from "react-loading";

class EventGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      dateValue: "",
      danceStyleValue: "",
      allDanceEvents: [],
      showAllEvents: true,
      isloading: true,
    };
  }

  componentDidMount() {
    axios.get("https://dancer-network.herokuapp.com/events").then((res) => {
      this.setState({
        allDanceEvents: res.data,
        isloading: false,
      });
    });
  }

  onEventNameChange = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  };

  onDanceStyleChange = (event) => {
    this.setState({
      danceStyleValue: event.target.value,
    });
  };

  dateChange = (event) => {
    this.setState({
      dateValue: event.target.value,
    });
  };

  render() {
    const filteredName = this.state.allDanceEvents.filter((perEvent) =>
      perEvent.eventName
        .toLowerCase()
        .startsWith(this.state.nameValue.toLowerCase())
    );
    const filteredDanceStyle = this.state.allDanceEvents.filter((perEvent) =>
      perEvent.danceStyle
        .toLowerCase()
        .startsWith(this.state.danceStyleValue.toLowerCase())
    );
    const filteredDate = this.state.allDanceEvents.filter((perEvent) =>
      perEvent.eventStartDate.startsWith(this.state.dateValue)
    );
    const isNameValueNull = this.state.nameValue === "";
    const isDateValueNull = this.state.dateValue === "";
    const isDanceStyleNull = this.state.danceStyleValue === "";

    return (
      <div className="whole-gallery">
        <div className="eventgallery">
          <div className="search-box-container">
            <h1>All Events</h1>
            <MyMap />
            <h2>Find your events here!</h2>
            <input
              placeholder="Search by Name"
              className="searchbox"
              type="text"
              value={this.state.nameValue}
              onChange={this.onEventNameChange}
            />
            <input
              placeholder="Search by Style"
              className="searchbox"
              type="text"
              value={this.state.danceStyleValue}
              onChange={this.onDanceStyleChange}
            />
            <input
              placeholder="Search by Date e.g (YYYY-MM-DD)"
              className="searchbox"
              type="text"
              value={this.state.dateValue}
              onChange={this.dateChange}
            />
            <h3>
              Currently {this.state.allDanceEvents.length} events around the
              world!
            </h3>
          </div>
          <div className="all-events-gallery">
            {!!this.state.isloading && <ReactLoading />}
            {this.state.nameValue !== "" &&
              isDateValueNull &&
              isDanceStyleNull &&
              filteredName.map((oneEvent) => {
                return (
                  <SingleEvent key={oneEvent.eventName} perEvent={oneEvent} />
                );
              })}
            {this.state.dateValue !== "" &&
              isNameValueNull &&
              isDanceStyleNull &&
              filteredDate.map((oneEvent) => {
                return (
                  <SingleEvent key={oneEvent.eventName} perEvent={oneEvent} />
                );
              })}
            {this.state.danceStyle !== "" &&
              isNameValueNull &&
              isDateValueNull &&
              filteredDanceStyle.map((oneEvent) => {
                return (
                  <SingleEvent key={oneEvent.eventName} perEvent={oneEvent} />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default EventGallery;
