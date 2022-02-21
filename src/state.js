import React, { Component, Fragment } from "react";
import Hello from "./Hello";

class State extends Component {
  state = {
    count: 0,
  };

  handleOnClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
    console.log("count", count);
  };

  render() {
    return (
      <Fragment>
        {this.props.warna}
        <p>
          Total Klik <strong>{this.state.count}</strong>
        </p>
        <button onClick={this.handleOnClick}>Klik</button>
        <Hello type={this.state.count} />
      </Fragment>
    );
  }
}

export default State;
