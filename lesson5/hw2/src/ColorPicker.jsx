import React, { Component } from "react";

class Colors extends Component {
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
          <button class="picker__button picker__button_coral" onMouseEnter={() => this.colorPicker("coral")} onMouseOut={() => this.setEmptyText()}></button>
          <button class="picker__button picker__button_aqua" onMouseEnter={() => this.colorPicker("aqua")} onMouseOut={() => this.setEmptyText()}></button>
          <button class="picker__button picker__button_bisque" onMouseEnter={() => this.colorPicker("bisque")} onMouseOut={() => this.setEmptyText()}></button>
        </div>
      </div>
    );
  }
}

export default Colors;
