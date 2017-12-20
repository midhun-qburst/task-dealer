import React, { Component } from 'react';
import Assignee from './Assignee';
import '../styles/style.css';

export default class AssigneeGroup extends Component {
    render() {
      return (
          <div className="assignee-group" draggable>
              <Assignee/>
              <Assignee/>
              <Assignee/>
              <Assignee/>
              <Assignee/>
              <Assignee/>
              <Assignee/>

          </div>
      );
    }
}