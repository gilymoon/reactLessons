import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "off",
    }

   
  }

  toggler = () => {
    this.setState({
      text: this.state.text === "off"
      ? "on"
      : "off"
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