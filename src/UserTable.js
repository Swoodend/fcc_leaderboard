import React, { Component } from 'react';

const apiEndpoint = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'

class UserTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      sortedByRecent: [],
      sortedByAllTime: []
    };
  }

  componentDidMount(){
    fetch(apiEndpoint).then((response) =>{
      return response.json()
    }).then((fccData) =>{
      let fccDataCopy = fccData.slice();
      let sortedByAllTime = this.sortByAllTime(fccData);
      let sortedByRecent = this.sortByRecent(fccDataCopy);

      this.setState({
        sortedByRecent,
        sortedByAllTime
      });
    });
  };

  sortByRecent(data){
    return data.sort((a,b) =>{
      if(a.recent > b.recent){
        return -1;
      } else if (b.recent > a.recent){
        return 1;
      } else {
        return 0;
      }
    })
  }

  sortByAllTime(data){
    return data.sort((a, b) =>{
      if(a.alltime > b.alltime){
        return -1;
      } else if (b.alltime > a.alltime){
        return 1;
      } else {
        return 0;
      }
    });
  }


  render(){
    //this.props.selectedAllTime
    let data = this.props.selectedAllTime ? this.state.sortedByAllTime : this.state.sortedByRecent
    let tableData = data.map((user, i) =>{
      return (
        <tr className="pink">
          <td>{i+1}</td>
          <td>{user.username}</td>
          <td className="userpic"><img src={user.img}/></td>
          <td>{user.alltime}</td>
          <td>{user.recent}</td>
        </tr>
      );
    });
    return (
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Avatar</th>
              <th>All Time</th>
              <th>Recent</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
