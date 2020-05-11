import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'John',
            lastName: 'Doe',
        };
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    }

    render() {
        const {firstName, lastName} = this.state;
        return(
            <div className="page">
                <h1 className="title">
                    Hello, {firstName} {lastName}
                </h1>
                <main className="content">
                    <ShoppingCart 
                        userName={firstName}
                    />
                    <Profile 
                        userData={this.state}
                        handleChange={this.handleChange} 
                    />
                </main>
            </div>
        );
    }
}

export default App;