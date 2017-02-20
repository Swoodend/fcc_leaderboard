import React, { Component } from 'react';
import SortRecent from './SortRecent';
import SortAllTime from './SortAllTime';

class NavBar extends Component {

  constructor(props){
    super(props);
    this.sortRecentClicked = this.sortRecentClicked.bind(this);
    this.sortAllTimeClicked = this.sortAllTimeClicked.bind(this);
    this.state = {
      sortingAllTime: true,
      sortingRecent: false
    };
  }

  sortRecentClicked(){
    this.setState({
      sortingAllTime: false,
      sortingRecent: true
    });
  }

  sortAllTimeClicked(){
    this.setState({
      sortingAllTime: true,
      sortingRecent: false
    });
  }

  render(){
    return (
      <div className="nav">
        <a href="https://www.freecodecamp.com">
          <div className="nav-item">FreeCodeCamp</div>
        </a>
        <SortRecent
          sortRecentClicked={this.sortRecentClicked}
          active={this.state.sortingRecent}
        />
        <SortAllTime
          sortAllTimeClicked={this.sortAllTimeClicked}
          active={this.state.sortingAllTime}
        />
      </div>
    );
  }
}

export default NavBar;
