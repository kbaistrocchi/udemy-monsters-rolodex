import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
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
    return (
      <div className="App">

        
        <CardList > 
        {/* anything between the component tags are called children */}
        {/* it does not show on the DOM unless the CardList component uses it */}

        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
        </CardList>
        
        
      </div>
    );
  }
  
}

export default App;
