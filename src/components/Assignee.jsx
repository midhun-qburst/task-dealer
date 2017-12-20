import React, { Component } from 'react';
import '../styles/style.css';

export default class Assignee extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
          <div className="assignee" >
          <label htmlFor="">{this.props.guy}</label>
          </div>
      );
    }
}