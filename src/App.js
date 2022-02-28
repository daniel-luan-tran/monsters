import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';
import { SearchBox } from './components/searchbox/searchbox.component';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => { return response.json()} )
      .then(users => {
        this.setState({monsters: users});
      });
  }

  render () {
  let {monsters, searchField} = this.state;
  let filteredMonsters = monsters.filter((monster) => {
    monsters = monsters || '';
    monster = monster || '';
    searchField = searchField || '';
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    <div className="App boldred">
        <h1>Monsters</h1>
        <SearchBox 
          type='search'
          placeholder='search monster'
          handleChange={ e => {
            this.setState({ searchField: e.target.value }, () => {
              console.log(this.state)
            });
          }}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }

  // render () {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
