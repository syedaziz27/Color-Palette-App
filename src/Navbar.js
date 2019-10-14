import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">Find Your Color</a>
        </div>
        <div className="slider-container">
          <span>Level: {this.props.level}</span>
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              onAfterChange={this.props.changeLevel}
              step={100}
            />
          </div>
        </div>
        <div className="select-container">
          <Select onChange={this.changeFormat} value={this.state.format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - </MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}