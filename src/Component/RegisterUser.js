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
    try {
      const payload = {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        stageName: this.state.stageName,
      };
      await axios.post(
        "https://dancer-network.herokuapp.com/users/register",
        payload
      );
      this.onRegisterSuccess();
    } catch (error) {
      if (error.response.status === 400) {
        alert("Missing information. Please fill in all necessary details.");
      }
    }
  };

  render() {
    return (
      <div className="register-user-card">
        <div className="register-user">
          <h2>User Registration</h2>
          Username:
          <input
            aria-label="username"
            type="text"
            placeholder="username"
            onChange={this.onChangeUsername}
          />
          Password:
          <input
            aria-label="password"
            type="password"
            placeholder="password"
            onChange={this.onChangePassword}
          />
          First name:
          <input
            aria-label="firstName"
            type="text"
            placeholder="First name"
            onChange={this.onChangeFirstName}
          />
          Last name:
          <input
            aria-label="lastName"
            type="text"
            placeholder="Last name"
            onChange={this.onChangeLastName}
          />
          Stage Name:
          <input
            aria-label="stageName"
            type="text"
            placeholder="Stage name"
            onChange={this.onChangeStageName}
          />
          <button
            aria-label="registerButton"
            className="add-event"
            onClick={(event) => this.RegisterUser(event)}
          >
            Register
          </button>
          {this.state.registerSuccess === true && (
            <h5 aria-label="successText"> Registration Successful! </h5>
          )}
        </div>
      </div>
    );
  }
}
export default RegisterUser;
