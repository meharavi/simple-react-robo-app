import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
//import { robots } from "./robots";
class App extends Component {

  // state = {
  //   robots: robots,
  //   searchField: ''
  // };

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('before', response);
        return response.json();
      })
      .then(resp => {
        this.setState({ robots: resp });
      });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredChars = robots.filter(char => {
      return char.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">ROBOTS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredChars} />
            </ErrorBoundary>
          </Scroll>
          {/* <CardList robots={this.state.robots} /> */}
        </div>
      );
    }

  }
}

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>Harry Potter</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

export default App;