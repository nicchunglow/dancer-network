import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import SingleEvent from "./SingleEvent";

class EventDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullEventData: [],
      isloading: true
    };
  }

  componentDidMount() {
    axios("https://dancer-network.herokuapp.com/events/:id")
      .then(res => {
        this.setState({
          fullEventData: res.data,
          isloading: false
        });
      })
      .catch(() =>
        this.setState({
          errorMessage: "No event has been found",
          isloading: false
        })
      );
  }

  render() {
    return (
      <div>
        {!!this.state.isloading && <ReactLoading />}
        <SingleEvent key={this.state.fullEventData.id} danceEvent={this.state.fullEventData} />
      </div>
    );
  }
}

export default EventDetailsPage;
