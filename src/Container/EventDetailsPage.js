import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import SingleEventFullDetails from "../Component/FullEventDisplay";
class EventDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullEventData: [],
      isloading: true,
      eventId : this.props.eventId
    };
  }

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    axios
      .get(`https://dancer-network.herokuapp.com/events/${this.eventId}`)
      .then((res) => {
        this.setState({
          fullEventData: res.data,
          isloading: false,
        });
        console.log(res.data);
      })
      .catch(() =>
        this.setState({
          errorMessage: "GG liao",
          isloading: false,
        })
      );
  }

  render() {
    const fullDetails = this.state.fullEventData;
    return (
      <div>
        {!!this.state.isloading && <ReactLoading />}
        <div className="fullDisplayCard">
          <div className="fullDisplayTextContainer">
            <h2>{fullDetails.eventName}</h2>
            <h3>Location :{fullDetails.location}</h3>
            <h3>Start Date: {fullDetails.eventStartDate}</h3>
            <h3>End Date: {fullDetails.eventEndDate}</h3>
            <h3>danceStyle: {fullDetails.danceStyle}</h3>
            <h4>By: {fullDetails.eventOwner}</h4>
            <p>{fullDetails.eventSummary}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default EventDetailsPage;
