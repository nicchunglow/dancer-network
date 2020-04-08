import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import "../Component/FullEventDetailsPage.css";
class FullEventDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullEventData: "",
      isloading: true,
      eventId: this.props.match.params.id,
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://dancer-network.herokuapp.com/events/published/${this.state.eventId}`
      )
      .then((res) => {
        this.setState({
          fullEventData: res.data,
          isloading: false,
        });
      });
  }

  render() {
    const fullDetails = this.state.fullEventData;
    return (
      <div>
        {!!this.state.isloading && (
          <ReactLoading type={"spinningBubbles"} color={"black"} />
        )}
        <div className="fullDisplayCard">
          <div className="fullDisplayTextContainer">
            <h2>{this.state.fullEventData.eventName}</h2>
            <p>Location :{fullDetails.location}</p>
            <p>Start Date: {fullDetails.eventStartDate}</p>
            <p>End Date: {fullDetails.eventEndDate}</p>
            <p>danceStyle: {fullDetails.danceStyle}</p>
            <p>{fullDetails.eventSummary}</p>
            <h4>Event By: {fullDetails.eventOwner}</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default FullEventDetailsPage;
