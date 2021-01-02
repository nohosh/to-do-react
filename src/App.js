
import './App.css';
import CreateTD from './CreateTD';
import Header from './Header';
import ShowTD from './ShowTD';
import React from 'react';

export default class App extends React.Component {
  state = {
    listFromCreateTD: []
  }
  callbackCreateTD = (data) => {
    this.setState({ listFromCreateTD: [...this.state.listFromCreateTD, data] });
    console.log("App JS", this.state.listFromCreateTD);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CreateTD callBack={this.callbackCreateTD} />
        <ShowTD list={this.state.listFromCreateTD} />
      </div>
    );
  }
}

