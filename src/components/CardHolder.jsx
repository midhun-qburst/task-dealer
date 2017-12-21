import React, { Component } from 'react';
import TaskCard from './TaskCard';
import '../styles/style.css';

export default class CardHolder extends Component {
    render() {
      return (
          <div className="card-holder" draggable>
          <label htmlFor="">...Unassigned...</label>
              <TaskCard id="1"/>
              <TaskCard id="2"/>
              <TaskCard id="3"/>
          </div>
      );
    }
}