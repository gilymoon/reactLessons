import React from 'react';
import User from './User';

const UsersList =({users}) => {

return <ul>
{users.map((user)=> (
  <User user={user}/>
))}
</ul>
}

export default UsersList;