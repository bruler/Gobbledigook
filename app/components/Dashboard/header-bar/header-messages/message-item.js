import React from 'react';

export default class MessageItem extends React.Component {
  render() {
    return(
      <li>
        {/* start message */}
        <a href="#">
          <div className="pull-left">
            <img src={this.props.displayPicture} className="img-circle" alt="User Image" />
          </div>
          <h4>
            {this.props.title}
            <small><i className="fa fa-clock-o"></i> {this.props.time}</small>
          </h4>
          <p>{this.props.content}</p>
        </a>
      </li>
    )
  }
}
