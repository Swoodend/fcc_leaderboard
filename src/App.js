import React, { Component } from 'react';
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
        <div className="img-container">
          <img className="fcc-logo" src={imgUrl} />
        </div>
        <div className="table-container">
          <div className="scroll-container">
            <UserTable selectedAllTime={this.state.displayAllTime}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
