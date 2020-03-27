import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

    // instead of hardcoding the monsters state, we will fetch it from an API
    // using promises
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }


  render() {
    // destructing: pull properties off of obj and save them as const
    const { monsters, searchField } = this.state;
        // this is equivalent to the following:
            // const monsters = this.state.monsters;
            // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase()));
        // the render function is called every time state changes
        // therefore, each time the user types anything is search, the state
        // changes and const searchField changes which changes the filteredMonsters
        // and these changes are displayed on the DOM

        // never what to change state withing the render function or it will loop forever

    return (
      <div className="App">  

        <SearchBox 
        placeholder='search monsters' 
        handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} /> 
        
      </div>
    );
  }
  
}

export default App;
