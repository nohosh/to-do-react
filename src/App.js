
import './App.css';
import CreateTD from './CreateTD';
import { Pane } from 'evergreen-ui';
import Header from './Header';
import ShowTD from './ShowTD';
import React from 'react';


export default class App extends React.Component {
  state = {
    listFromCreateTD: []
  }

  callbackCreateTD = (data) => {
    this.setState({ listFromCreateTD: [data, ...this.state.listFromCreateTD] });
    console.log("App JS", this.state.listFromCreateTD);
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <CreateTD callBack={this.callbackCreateTD} />
        {this.state.listFromCreateTD.map(todo => (
          <ShowTD height={50}
            key={todo.id}
            text={todo.text} />
        ))}
      </div>
    );
  }

}

