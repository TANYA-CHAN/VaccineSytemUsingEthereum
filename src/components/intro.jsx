import React, { Component } from "react";
import hiw from "../hiw1.png";

class Intro extends Component {
  state = {};
  render() {
    return (
      <img
        src={hiw}
        style={{ marginTop: "5px" }}
        className="img-fluid"
        alt="Responsive image"
      />
    );
  }
}

export default Intro;
