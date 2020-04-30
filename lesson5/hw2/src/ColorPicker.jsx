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
      // <div className="colors">
      //   <button style={{
      //     backgroundColor: RED,
      //   }}
      //   onClick={() => this.setBodyColor(RED)}
      //   className="colors__button"/>
      //   <button style={{
      //     backgroundColor: GREEN,
      //   }}
      //   onClick={() => this.setBodyColor(GREEN)}
      //   className="colors__button"/>
      //   <button style={{
      //     backgroundColor: BLUE,
      //   }}
      //   onClick={() => this.setBodyColor(BLUE)}
      //   className="colors__button"/>
      // </div>
      <div>
        <div class="picker__title">{`${this.state.text}`}</div>
        <div>
          <button class="picker__button picker__button_coral" onMouseEnter={() => this.colorPicker("Coral")} onMouseOut={() => this.setEmptyText()}></button>
          <button class="picker__button picker__button_aqua" onMouseEnter={() => this.colorPicker("Aqua")} onMouseOut={() => this.setEmptyText()}></button>
          <button class="picker__button picker__button_bisque" onMouseEnter={() => this.colorPicker("Bisque")} onMouseOut={() => this.setEmptyText()}></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
