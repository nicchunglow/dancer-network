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
      allDanceEvents: [],
      showAllEvents: true,
      isloading: true
    };
  }

  componentDidMount() {
    axios.get("https://dancer-network.herokuapp.com/events").then(res => {
      this.setState({
        allDanceEvents: res.data,
        isloading: false
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
    const filteredName = this.state.allDanceEvents.filter(perEvent =>
      perEvent.eventName
        .toLowerCase()
        .startsWith(this.state.nameValue.toLowerCase())
    );
    // const filteredDate = () => this.state.allDanceEvents.filter(perEvent =>
    //   perEvent.eventStartDate.this.state.dateValue
    // );
    const isNameValueNull = this.state.nameValue === "";
    const isDateValueNull = this.state.dateValue === "";
    return (
      <div className="whole-gallery">
        <div className="eventgallery">
          <MyMap />
          <div className="search-box-container">
            <h2>Find your events here!</h2>
            <input
              placeholder="Search by Name"
              className="searchbox"
              type={Text}
              value={this.state.nameValue}
              onChange={this.handleChange}
            />
            <input
              placeholder="Search by Date (e.g. DDMMYYYY)"
              className="searchbox"
              type={Text}
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
            filteredName.map(oneEvent => {
              return <SingleEvent key={oneEvent.id} perEvent={oneEvent} />;
            })}
            {/* {this.state.dateValue !== "" &&
            filteredDate.map(oneEvent => {
              return <SingleEvent key={oneEvent.id} perEvent={oneEvent} />;
            })} */}
            {isNameValueNull && isDateValueNull &&
        filteredName.map(oneEvent => {
          return <SingleEvent key={oneEvent.id} perEvent={oneEvent} />;
        })}
          </div>
        </div>
      </div>
    );
  }
}
export default EventGallery;
