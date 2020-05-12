import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";


class UsersList extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 3
    }
  }
  
  goPrev=() => {
    console.log(this);
    
    const {currentPage} = this.state;
    this.setState({
      currentPage: currentPage - 1
    })
  }
  goNext=() => {
    console.log(this);
    
    const {currentPage} = this.state;
    this.setState({
      currentPage: currentPage + 1
    })
  }

  render () {
    const {users} = this.props;
    const {currentPage, itemsPerPage} = this.state;
    const displayedUsers = users.slice(0, 3)

    const start = currentPage * itemsPerPage;
    const usersToDisplay = users.slice(start, start + itemsPerPage)
    return (
      <div>
        <Pagination
          totalItems={10}
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          itemsPerPage={3}
        />
        <ul>
          {usersToDisplay.map((user) => (
            <User user={user} key={user.id}/>
          ))}
        </ul>
      </div>
    );
  }
}


export default UsersList;
