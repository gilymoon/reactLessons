import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Off",
    }

   
  }

  toggler = () => {
    this.setState({
      text: this.state.text === "Off"
      ? "On"
      : "Off"
    })
  }

  

  render () {
    return (
      <button className="toggler"
      onClick={this.toggler}
      >
        {`${this.state.text}`}
      </button>
    )
  }
}

export default Toggler;