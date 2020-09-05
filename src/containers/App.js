import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        //From reducer
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    //Used to send action to reducer
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //Replace componentDidMount
        onRequestRobots: () => dispatch(requestRobots())
    }
}


// IF APP OWNS STATE IT HAS TO BE CLASS
// IF COMPONENT HAS STATE IT IS A SMART COMPONENT (CALLED A CONTAINER)
class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return isPending ?
                <h1 className="tc">Loading</h1> :
                (
                    <div className="tc">
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                )    
    }
}

//Connect will run and return a func that will run through App
export default connect(mapStateToProps, mapDispatchToProps)(App);

//App is now subscribed to any state changes in redux Store