import React, { Component } from 'react';

class SortAllTime extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.sortAllTimeClicked();
  }

  render(){

    let activeStyle = {
      background : 'white',
      color: '#006400'
    };

    if (this.props.active){
      return <div onClick={this.handleClick} style={activeStyle} className="nav-item">Sort all time</div>
    } else {
      return <div onClick={this.handleClick}className="nav-item">Sort all time</div>
    }
  }
}

export default SortAllTime;
