import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import SingleEventFullDetails from "../Component/FullEventDisplay";
class EventDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullEventData: [],
      isloading: true
    };
  }

  componentDidMount() {
    axios.get("https://dancer-network.herokuapp.com/events/:id")
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
          isloading: false
        })
      );
  }

  render() {
    // const eventId = props.match.params.id;
    // allEvents = this.state.fullEventData;
    // const currentEventData = allEvents.find((event) => event.id === eventId);
    return (
      <div>
        {!!this.state.isloading && <ReactLoading />}
        <SingleEventFullDetails key={this.state.fullEventData.id} perEvent={this.state.fullEventData} />
      </div>
    );
  }
}
export default EventDetailsPage;
