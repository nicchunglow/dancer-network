import React from "react";
import "./RegisterUser.css";
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
          registerSuccess: false,
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
  onRegisterSuccess = () => {
    this.setState({
      registerSuccess: true,
    });
  };
  RegisterUser = async (event) => {
    const payload = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      stageName: this.state.stageName,
    };

    const res = await axios.post(
      "https://dancer-network.herokuapp.com/users/register",
      payload
    );
    this.onRegisterSuccess();
  };

  render() {
    return (
      <div className="register-user-card">
        <div className="register-user">
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
          {this.state.registerSuccess === true && (
            <h5> Registration Successful! </h5>
          )}
        </div>
      </div>
    );
  }
}
export default RegisterUser;
