import React, { Component } from "react";
import {Alert, BUtton, Container} from  'reactstrap'

class Submit extends Component {
  state = { value: "" };

  //   handleChange = (e) => {
  //     this.setState({ value: e.target.value });
  //   };

  handleSubmit = (e) => {
    alert("Nama yang dimasukkan adalah " + this.state.value);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={this.state.value}
              //   onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Submit;
