import React from "react";
import "./CreateEvent.css";
class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [
        {
          eventName: "",
          description: "",
          danceStyle: "",
          country: "",
          eventDate: "",
        },
      ],
    };
  }

  handleChangeEventName = event => {
    this.setState({
      eventName: event.target.value,
    });
  };

  addEvent = () => {
    const name = this.state.allEvents;
    const newEvent = {
      eventName: name,
    };

    this.setState(state => {
      return {
        allEvents: [...state.allEvents, newEvent],
      };
    });
  };

  // handleChangeDescription = event => {
  //   this.setState({
  //     description: event.target.value,
  //   });
  // };

  // handleChangeDanceStyle = event => {
  //   this.setState({
  //     danceStyle: event.target.value,
  //   });
  // };

  // handleChangeCountry = event => {
  //   this.setState({
  //     country: event.target.value,
  //   });
  // };

  render() {
    return (
      <div className="CreateEvent">
        Event Name :{" "}
        <input
          type="text"
          value={this.state.eventName}
          onChange={this.handleChangeEventName}
        />
        <select
          value={this.state.danceStyle}
          onChange={this.handleChangeDanceStyle}
        >
          <option>Locking</option>
          <option>Popping</option>
          <option>Hip Hop</option>
        </select>
        <select
          value={this.state.country}
          onChange={this.handleChangeCountry}
        >
          <option>Singapore</option>
          <option>Malaysia</option>
          <option>Japan</option>
        </select>
          Event description : <input
          type="text"
          value={this.state.description}
          onChange={this.handleChangeDescription}
        />
        <button onClick={this.handleChangeEventName}>Add Event!</button>
        {console.log(this.state.eventName)}
      </div>
    );
  }
}
export default CreateEvent;
