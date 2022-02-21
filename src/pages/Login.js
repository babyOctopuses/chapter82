import React, { Component } from "react";
import { withRouter } from "react-router";
import { Container } from "reactstrap";

class Response extends String {
  json = () => JSON.parse(this);
}
function mockFetch(url, { body }) {
  const { email, password } = body;
  if (email !== "admin@admin.com" || password !== "password")
    return Promise.reject("email atau password salah");

  return Promise.resolve(
    new Response(JSON.stringify({ accessToken: "pura-pura ini token" }))
  );
}

class Login extends Component {
  state = { email: null, password: null };
  set = (name) => (event) => this.setState({ [name]: event.target.value });
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    mockFetch("http://api.example.com/v1/auth/login", {
      body: { email, password },
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.accessToken);
        history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    return (
      <Container className="p-4 d-flex align-items-center justify-content-center">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={this.set("email")} />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.set("password")}
          />
          <input type="submit" value="submit" />
        </form>
      </Container>
    );
  }
}
export default withRouter(Login);
