import React from 'react';
import Greeting from './Greeting.jsx';


// const userInfo = {
//   firstName: 'John',
//   lastName: 'Doe',
//   birthDate: new Date('1996-04-04T11:11:11.819Z')
// };


const App = () => {
  return (<Greeting
    firstName= 'John'
  lastName='Doe'
  birthDate={new Date('1996-04-04T11:11:11.819Z')}
    />
    )
};

export default App;
