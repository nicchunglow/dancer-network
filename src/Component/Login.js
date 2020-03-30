import React from "react";
import axios from "../utils/axios";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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

  PostLogin = async event => {
    const details = {
      username: this.state.username,
      password: this.state.password
    };
    const res = await axios.post("https://dancer-network.herokuapp.com/users/login", details);
    console.log(res.data);
  };

  render() {
    return (
      <div className="create-event-card">
        <div className="create-event">
          <h2>Login</h2>
            username:{" "}
          <input
            type="text"
            placeholder="username"
            onChange={this.onChangeUsername}
          />
            password:{" "}
          <input
            type="password"
            placeholder="password"
            onChange={this.onChangePassword}
          />
          <button className="add-event" onClick={event => this.PostLogin(event)}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
