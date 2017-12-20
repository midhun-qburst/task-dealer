import React, { Component } from 'react';
import './App.css';
import CardHolder from './components/CardHolder';
import AssigneeGroup from './components/AssigneeGroup';

class App extends Component {

  constructor(props) {
    super(props);
    this.assigneeDiv = undefined;
  }

  handleDrop = (ev) => {
    this.assigneeDiv.addEventListener('drop', (ev) => {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("card");
      ev.target.appendChild(document.getElementById(data));
    });
  }

  componentDidMount() {
    this.assigneeDiv.addEventListener('dragover', (ev) => {
      ev.preventDefault();
    });
    this.assigneeDiv.addEventListener('drop', this.handleDrop());
  }
  componentWillUnmount() {debugger
    this.assigneeDiv.removeEventListener('drop',this.dragEventFunc());
    this.assigneeDiv.removeEventListener('dragover',this.dragEventFunc());

}

  render() {
    return (
      <div className="App">
        <h1>Task Dealer</h1>
        <CardHolder />
        <div id="assignee" ref={node => this.assigneeDiv = node} >
          <AssigneeGroup />
        </div>
      </div>
    );
  }
}

export default App;
