import React, { Component } from 'react';
import './App.css';

import Control from "./components/Control";
import TaskList from './components/TaskList';
import ModalPopup from "./components/ModalPopup";


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Control />
            <TaskList />
          </div>
          <ModalPopup />
        </div>
      </div>
    );
  }
}

export default App;
