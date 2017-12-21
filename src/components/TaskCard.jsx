import React, { Component } from 'react';
import '../styles/style.css';

export default class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.cardDiv = undefined;
    }
         
    handleDragStart = () => {
    this.cardDiv.addEventListener('dragstart',(ev)=> {
       ev.dataTransfer.setData("card", ev.target.id); 
     } );
    }
    componentDidMount() {
        this.cardDiv.addEventListener('dragstart',this.handleDragStart());
    }
    componentWillUnmount() {
        this.cardDiv.removeEventListener('dragstart',this.handleDragStart());

    }

    render() {        
      return (
          <div className="task-card" id ={this.props.id}  ref={node => this.cardDiv = node} draggable>
              <label htmlFor="">Task id: </label>
          </div>
      );
    }
}