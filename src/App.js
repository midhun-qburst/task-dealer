import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardHolder from './components/CardHolder';
import Assignee from './components/Assignee';

class App extends Component {

  constructor(props) {
    super(props);
    this.assigneeDiv = undefined;
  }

  handleDrop = (ev) => {
    this.assigneeDiv.addEventListener('drop', (ev) => {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text ");
      ev.target.appendChild(document.getElementById(data));
    });
  }

  componentDidMount() {
    this.assigneeDiv.addEventListener('dragover', (ev) => {
      ev.preventDefault();
    });
    this.assigneeDiv.addEventListener('drop', this.handleDrop());
  }

  render() {
    return (
      <div className="App">
        <h1>Task Dealer</h1>
        <CardHolder />
        <div id="assignee" ref={node => this.assigneeDiv = node} >
          <Assignee />
        </div>
      </div>
    );
  }
}

export default App;
