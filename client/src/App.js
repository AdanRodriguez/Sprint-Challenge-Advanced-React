import React from 'react';
import './App.css';
import PlayerCard from "./component/PlayerCard";
import Nav from "./component/Nav";

class App extends React.Component{
  constructor() {
    super();
    this.state= {
    players: [],
  }
}

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then(res => this.setState({players: res}))
    .catch(err => console.log("error"));
  }

  render() {
  return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <Nav/>
        <div>{this.state.players.map((player) => {
                return <PlayerCard key={player.id} 
                                  player ={player} />
            })}
        </div>
        
      </div>
    );
  }
}

export default App;