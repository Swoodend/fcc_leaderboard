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
    }, () =>{
      this.props.reportState(this.state.sortingRecent, this.state.sortingAllTime);
    });
  }

  sortAllTimeClicked(){
    this.setState({
      sortingAllTime: true,
      sortingRecent: false
    }, () => {
      this.props.reportState(this.state.sortingRecent, this.state.sortingAllTime);
    });
  }

  render(){
    return (
      <div className="nav">
        <a className="nav-item" href="https://www.freecodecamp.com">
          <div>FreeCodeCamp</div>
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
