import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount() {}

  render() {
    return (
      <div className="login-box">
        <div className="login rounded shadow-sm">
          <h4 className="mb-4">LOGIN</h4>
          <label className="d-block" for="username">
            Username
          </label>
          <input
            type="text"
            className="rounded shadow-sm mb-3"
            id="username"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <label className="d-block" for="password">
            Password
          </label>
          <input
            type="password"
            className="rounded shadow-sm mb-3"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button className="d-block rounded">Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
