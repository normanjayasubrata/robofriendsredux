import React, { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";
import ErrorBoundary from "../component/ErrorBoundary";
// import { robots } from "./robots";

class App extends Component {
  state = {
    robots: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { searchField, robots } = this.state;

    const filteredRobot = this.state.robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    });

    return robots.length === 0 ? (
      <div className="text-center">
        <h1>Robofriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <h1>Loading ...</h1>
      </div>
    ) : (
      <div className="text-center">
        <h1>Robofriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobot} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
