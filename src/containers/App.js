import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

// IF APP OWNS STATE IT HAS TO BE CLASS
// IF COMPONENT HAS STATE IT IS A SMART COMPONENT
class App extends React.Component {
    constructor() {
        super();
        //State is something can change and effect the app
        //Usually lives in the parent component
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users })); 
    }

    //Any time you make your own method on components you have to use this syntax
    onSearchChange = (event) => {
        // In order to update state (searchfield gets updated according to searchbox)
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return !robots.length ?
                <h1 className="tc">Loading</h1> :
                (
                    <div className="tc">
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>
                )    
    }
}

export default App;