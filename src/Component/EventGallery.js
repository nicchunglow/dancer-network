import React from "react";
import axios from "axios";
import SingleEvent from "./SingleEvent";
import MyMap from "./MyMap";
import "./EventGallery.css";
class EventGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nameValue: "",
      // dateValue: "",
      allDanceEvents: [],
      showAllEvents: true
    };
  }

  componentDidMount() {
    axios.get("https://dancer-network.herokuapp.com/events").then(res => {
      this.setState({
        allDanceEvents: res.data
      });
    });
  }

  handleChange = event => {
    this.setState({
      nameValue: event.target.value
    });
  };

  dateChange = event => {
    this.setState({
      dateValue: event.target.value
    });
  };

  render() {
    return (
      <div className="whole-gallery">
        <MyMap />
        <div className="galleryandbox">
          <div className="search-box-container">
            <h2>Find your events here!</h2>
            <input
              placeholder="Search by Name"
              className="searchbox"
              type="text"
              value={this.state.nameValue}
              onChange={this.handleChange}
            />
            <input
              placeholder="Search by Date (e.g. DDMMYYYY)"
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

          <div className="eventgallery">
            {this.state.allDanceEvents.map(event => {
              return <SingleEvent key={event.id} perEvent={event} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default EventGallery;
