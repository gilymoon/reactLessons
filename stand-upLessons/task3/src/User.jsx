import React, { Component } from "react";

class User extends Component {
  constructor(props){
    super(props);
    this.state ={
      avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4',
      name: 'Github',
      location: 'San Francisco, SA'
    }
    console.log('constructor');
  }

  componentDidMount() {
    const {userId}= this.props;
    fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json())
    .then(data =>{
      const {avatar_url , name, location} = data;
      this.state.name = name;
      this.state.avatar_url = avatar_url;
      this.state.location = location;
      this.setState({
        avatar_url,
        name,
        location
      })}
    )
}
shouldComponentUpdate() {
    console.log('==> shouldComponentUpdate');
}
componentDidUpdate() {
    console.log('==> componentDidUpdate');
}
componentWillUnmount() {
    console.log('==> componentWillUnmount');
}
  
  render(){
    const { avatar_url, name, location } = this.state;
    console.log('render');
    
    return (
      <div className="user">
      <img
        alt="User Avatar"
        src={avatar_url}
        className="user__avatar"
        />
      <div className="user__info">
    <span className="user__name">{name}</span>
    <span className="user__location">{location}</span>
      </div>
    </div>
  );
}
};

export default User;