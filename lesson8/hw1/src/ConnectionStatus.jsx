import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'online'
    }
  }

  updateStatus = e => {
    this.setState({
        status: e.type,
    });
}

componentDidMount() {
    window.addEventListener('online', this.updateStatus);
    window.addEventListener('offline', this.updateStatus);
}

componentWillUnmount() {
    window.removeEventListener('online', this.updateStatus);
    window.removeEventListener('offline', this.updateStatus);
}

  render() {
    const statusOnline = <div className="status">online</div>
    const statusOffline = <div className="status status_offline">offline</div>
    return (
      this.state.status === 'online'
      ? statusOnline
      : statusOffline
    )
  }
}

export default ConnectionStatus;