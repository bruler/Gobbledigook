// @flow
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';
import DashMain from './Dashboard/dashmain';

export default class Dashboard extends Component {
  render() {
    return(
      <DashMain />
    );
  }
}

