import React from "react";
import axios from "../utils/axios";
import "../Component/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginSuccess: false,
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
  onLoginSuccess = () => {
    this.setState({
      loginSuccess: true,
    });
  };

  PostLogin = async (event) => {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };
    const res = await axios.post(
      "https://dancer-network.herokuapp.com/users/login",
      payload
    );

    this.onLoginSuccess();
  };
  render() {
    return (
      <div className="login-card">
        <div className="login-text">
          <h2>Login</h2>
          username:{" "}
          <input
            aria-label="username"
            type="text"
            placeholder="username"
            onChange={this.onChangeUsername}
          />
          password:{" "}
          <input
            aria-label="password"
            type="password"
            placeholder="password"
            onChange={this.onChangePassword}
          />
          <button
            aria-label="loginButton"
            className="add-event"
            onClick={(event) => this.PostLogin(event)}
          >
            Login
          </button>
          {this.state.loginSuccess === true && <h5> Login Successful! </h5>}
        </div>
      </div>
    );
  }
}

export default Login;
