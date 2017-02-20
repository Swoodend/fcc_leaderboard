import React, { Component } from 'react';

class SortRecent extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.sortRecentClicked();
  }

  render(){
    let activeStyle = {
      background: 'white',
      color: '#006400'
    };

    if (this.props.active){
      return (
        <div onClick={this.handleClick} style={activeStyle} className="nav-item">
          Sort by Recent
        </div>
      );
    } else {
      return <div onClick={this.handleClick} className="nav-item">Sort by Recent</div>;
    }
  }
}

export default SortRecent;
