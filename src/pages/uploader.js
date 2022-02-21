import React, { Component } from "react";
import firebase from "../services/firebase";

const storage = firebase.storage();
export default class RandomUploader extends Component {
  state = {};
  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({ file });
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.setState({ image: reader.result });
      },
      false
    );
    if (file.type.includs("image/")) reader.readAsDataURL(file);
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { file } = this.state;
    //Upload file
    try {
      const response = await storage.ref(`files/${file.name}`).put(file);
      console.log(response);
      alert("File uploaded!");
    } catch (err) {
      console.log(err);
      alert("Failed to upload file!");
    }
  };
  render() {
    const { image } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h4>Random Uploader</h4>
          {!!image && <img src={image} alt="Image Preview" />}
          <form onSubmit={this.handlSubmit}>
            <div className="form-control" style={{ margin: "32px 8px" }}>
              <input
                type="file"
                onChange={this.handleFileChange}
                placeholder="Random File"
              />
            </div>
            <div className="form-control">
              <input type="submit" value="Upload" className="form-submit" />
            </div>
          </form>
        </header>
      </div>
    );
  }
}
