
import './App.css';
import CreateTD from './CreateTD';

import Header from './Header';

import React from 'react';
import ShowTD from './ShowTD';


export default class App extends React.Component {
  state = {
    listFromCreateTD: []
  }

  callbackCreateTD = (data) => {
    this.setState({ listFromCreateTD: [data, ...this.state.listFromCreateTD] });
  }
  doneTodo = (id) => {
    console.log('dont td', id);
    this.setState({
      listFromCreateTD: this.state.listFromCreateTD.map(todo => {
        console.log(todo);
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <CreateTD callBack={this.callbackCreateTD} />
        {this.state.listFromCreateTD.map(todo => (
          <ShowTD
            callBack={() => this.doneTodo(todo.id)}
            height={50}
            key={todo.id}
            complete={todo.complete}
            text={todo.text} />
        ))}
      </div>
    );
  }

}

