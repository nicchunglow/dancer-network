import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import FullEventDisplay from "../Component/FullEventDisplay";
class EventDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullEventData: [],
      isloading: true
    };
  }

  componentDidMount() {
    axios.get("https://dancer-network.herokuapp.com/events/5612e7ff-d42d-4a8d-b873-cb8119b47473")
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
    // allEvents = this.state.fullEventData
    // const currentEventData =
    return (
      <div>
        {!!this.state.isloading && <ReactLoading />}

        <FullEventDisplay key={this.state.fullEventData.id} perEvent={this.state.fullEventData} />;
      </div>
    );
  }
}
export default EventDetailsPage;
