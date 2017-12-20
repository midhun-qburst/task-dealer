import React, { Component } from 'react';
import Assignee from './Assignee';
import '../styles/style.css';

export default class AssigneeGroup extends Component {
    render() {
      return (
          <div className="assignee-group" draggable>
              <Assignee guy="James"/>
              <Assignee guy="Roy"/>
              <Assignee guy="Peter"/>
              <Assignee guy="Dennis"/>
              <Assignee guy="Linda"/>
              <Assignee guy="Jane"/>
              <Assignee guy="Mary"/>

          </div>
      );
    }
}