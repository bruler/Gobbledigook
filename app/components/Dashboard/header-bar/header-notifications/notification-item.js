import React from 'react';

export default class NotificationItem extends React.Component {
  render() {
    return(
      <li key={"header-notification-item"}>
        <a href="#">
          <i className={this.props.theme}></i> {this.props.content}
        </a>
      </li>
    )
  }
}
