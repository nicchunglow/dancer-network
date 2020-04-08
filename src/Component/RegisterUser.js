import React from "react";
import "./CreateEvent.css";
import axios from "../utils/axios";
class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [
        {
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          stageName: "",
        },
      ],
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  onChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  onChangeStageName = (event) => {
    this.setState({
      stageName: event.target.value,
    });
  };

  RegisterUser = async (event) => {
    const details = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      stageName: this.state.stageName,
    };

    const res = await axios.post(
      "https://dancer-network.herokuapp.com/users/register",
      details
    );
  };

  render() {
    return (
      <div className="create-event-card">
        <div className="create-event">
          <h2>User Registration</h2>
          Username:
          <input
            type="text"
            placeholder="username"
            onChange={this.onChangeUsername}
          />
          Password:
          <input
            type="password"
            placeholder="password"
            onChange={this.onChangePassword}
          />
          First name:
          <input
            type="text"
            placeholder="first name"
            onChange={this.onChangeFirstName}
          />
          Last name:
          <input
            type="text"
            placeholder="last name"
            onChange={this.onChangeLastName}
          />
          Stage Name:
          <input
            type="text"
            placeholder="Stage Name"
            onChange={this.onChangeStageName}
          />
          <button
            className="add-event"
            onClick={(event) => this.RegisterUser(event)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default RegisterUser;
