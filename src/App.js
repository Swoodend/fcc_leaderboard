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
    this.state = {
      sortedByRecent: [],
      sortedByAllTime: []
    };
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="table-container">
          <img src={imgUrl} />
          <UserTable />
        </div>
      </div>
    );
  }
}

export default App;
