import React from 'react';
import $ from 'jquery';
import Raphael from 'raphael';
import Morris from 'morris';

export default class DonutChart extends React.Component {
  getDefaultProps() {
    return {
      id: 'donut-chart-1',
      colors: ['#3c8dbc'],
      data: [
        {
          label: "Donut piece", value: 40
        }
      ]
    }
  }

  componentDidMount(){
    var donut = new Morris.Donut({
      element: this.props.id,
      resize: true,
      colors: this.props.colors,
      data: this.props.data,
      hideHover: 'auto'
    });
  }

  render() {
    var style = {
      position: 'relative',
      height: '300px'
    };

    return(
      <div className="chart tab-pane active" id={this.props.id} style={style}>
        {this.props.children}
      </div>
    )
  }
}
