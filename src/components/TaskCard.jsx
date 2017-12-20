import React, { Component } from 'react';
import '../styles/style.css';

export default class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.cardDiv = undefined;
    }
         
    dragEventFunc = () => {
    this.cardDiv.addEventListener('dragstart',(ev)=> {
       ev.dataTransfer.setData("text", ev.target.id); 
     } );
    }
    componentDidMount() {
        this.cardDiv.addEventListener('dragstart',this.dragEventFunc());
    }
    componentWillUnmount() {debugger
        this.cardDiv.removeEventListener('dragstart',this.dragEventFunc());

    }

    render() {        
      return (
          <div className="task-card" id ="card"  ref={node => this.cardDiv = node} draggable>
              <label htmlFor="">Task id: </label>
          </div>
      );
    }
}