import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  colorPicker(color){
    this.setState({
      text: color
    })
  }

  setEmptyText(){
    this.setState({
      text: "",
    })
  }


  render() {
    return (
      <div>
        <div className="picker__title">{`${this.state.text}`}</div>
        <div>
          <button className="picker__button picker__button_coral" onMouseEnter={() => this.colorPicker("Coral")} onMouseOut={() => this.setEmptyText()}></button>
          <button className="picker__button picker__button_aqua" onMouseEnter={() => this.colorPicker("Aqua")} onMouseOut={() => this.setEmptyText()}></button>
          <button className="picker__button picker__button_bisque" onMouseEnter={() => this.colorPicker("Bisque")} onMouseOut={() => this.setEmptyText()}></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
