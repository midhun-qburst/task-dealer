import React, { Component } from 'react';
import TaskCard from './TaskCard';
import '../styles/style.css';

export default class CardHolder extends Component {
    render() {
      return (
          <div className="card-holder">
          <label htmlFor="">...Unassigned...</label>
          {this.props.cards.map( (card)=> {
              return <TaskCard id= {card.taskId} task= {card.task} assignor = {card.assignedBy} />
          }
          )}
          </div>
      );
    }
}