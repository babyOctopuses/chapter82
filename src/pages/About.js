import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { Button, Container } from "reactstrap";
import Navbar from "../components/Navbar";

export class About extends Component {
  state = { isAuthenticated: false };
  componentWillMount() {
    this.checkUser();
  }

  checkUser = () => {
    const token = localStorage.getItem("token");
    if (!!token) {
      return this.setState({ isAuthenticated: true });
    }
  };

  handleLogout = () => {
    const { history } = this.props;
    localStorage.removeItem("token");
    history.push("/login");
  };

  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) return <Redirect to="/login" />;
    return (
      <Fragment>
        <Navbar />
        <Container className="p-4">
          <h1>Ini halaman about</h1>
          <Button color="danger" onClick={this.handleLogout}>
            Logout
          </Button>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(About);
