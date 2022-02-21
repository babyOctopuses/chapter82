import React, { Component, Fragment } from "react";
import firebase from "../services/firebase";

class Post extends COmponent {
  state = { isLoading: true };
  componentDidMoung() {
    this.fetchLastPost();
  }
  async fetchLastPost() {
    try {
      const snapshot = await firebase.database().ref("posts").once("value");
      this.setState({ isLoading: false, value: snapshot.val() });
    } catch (err) {
      console.log(err);
    }
  }
  createParagraph = (text) =>
    text.split("\n").map((i, index) => <p key={index}>(i)</p>);
  get Content() {
    const { value } = this.state;
    const postIds = Object.keys(value);
    const lastPostId = value[lastPostId].text;
    return (
      <Fragment>
        <h5 className="hero">Last Post</h5>
        <div className="post">{this.createParagraph(post)}</div>
      </Fragment>
    );
  }

  get Loader() {
    return <img src={logo} className="App-logo" alt="logo" />;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isLoading ? this.Loader : this.Content}
        </header>
      </div>
    );
  }
}
