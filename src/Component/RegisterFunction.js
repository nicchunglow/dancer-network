import React from "react";
import "./CreateEvent.css";
import Axios from "axios";
class RegisterFunction extends React.Component {
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

  onChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  onChangeStageName = event => {
    this.setState({
      stageName: event.target.value
    });
  };

  RegisterUser = async event => {
    const payload = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      stageName: this.state.stageName
    };

    const res = await Axios.post("https://dancer-network.herokuapp.com/users/register", payload);
    console.log(res);
  }

  render() {
    return (
      <div>
        <h2>New User Registration</h2>
        <div>
          <span>
            username:{" "}
            <input
              type="text"
              placeholder="username"
              onChange={this.onChangeUsername}
            />
          </span>
          <br />
          <span>
            password:{" "}
            <input
              type="text"
              placeholder="password"
              onChange={this.onChangePassword}
            />
          </span>
          <br />
          <span>
            first name:{" "}
            <input
              type="text"
              placeholder="first name"
              onChange={this.onChangeFirstName}
            />
          </span>
          <br />
          <span>
            last name:{" "}
            <input
              type="text"
              placeholder="last name"
              onChange={this.onChangeLastName}
            />
          </span>
          <br />
          <span>
            Stage Name:{" "}
            <input
              type="text"
              placeholder="Stage Name"
              onChange={this.onChangeStageName}
            />
          </span>
          <br />
          <button onClick={event => this.RegisterUser(event)}>Register</button>
        </div>
      </div>
    );
  }
}
export default RegisterFunction;
