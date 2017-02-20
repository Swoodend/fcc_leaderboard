import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import UserTable from './UserTable';

const imgUrl = `
  http://res.cloudinary.com/ddbeeuyr4/image/upload/co_rgb:006400
  ,e_colorize:100/v1487532006/fcclogo_ebcdeh.png
`;


class App extends Component {
  constructor(props){
    super(props);
    this.getNavState = this.getNavState.bind(this);
    this.state ={
      sortedByRecent: [],
      sortedByAllTime: [],
      displayRecent: false,
      displayAllTime: true
    }
  }

  getNavState(displayRecent, displayAllTime){
    this.setState({
      displayRecent,
      displayAllTime
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar reportState={this.getNavState} />
        <div className="table-container">
          <img src={imgUrl} />
          <UserTable selectedAllTime={this.state.displayAllTime}/>
        </div>
      </div>
    );
  }
}

export default App;
