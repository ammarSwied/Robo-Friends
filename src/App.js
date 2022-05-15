import React, {Component} from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import logo from './logo.png';
import Scroll from './Scroll';
import './App.css'


class App extends Component{

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respone => respone.json())
            .then(users => this.setState({robots: users}));

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }   

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className="tc">
                <h1 className="app-title">RoboFriends</h1>
                <img src= {logo} alt="App Icon" className="w-100 f7 measure"/>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );

    }

}

export default App;