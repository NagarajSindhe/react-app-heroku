import React, { Component } from "react";
import UsersService from "../services/UsersService";


class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    UsersService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }
  createUser=()=>{
    this.props.history.push('/addUsers');
  }
  updateBtnHandler=(id)=>{
    this.props.history.push(`/update-user/${id}`)

  }
  render() {
    console.log(this.state.users);
    return (
      <div>
        <div>
          <h1 className="text-center">Users List With Axios</h1>
          <div className="row">
          <button className="btn btn-primary" onClick={this.createUser}>Create User</button>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User Id</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>AdharNo</th>
                <th>Mobile Number</th>
                <th>Created By</th>
                <th>Last Updated </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.fname}</td>
                    <td>{user.mName}</td>
                    <td>{user.lname}</td>
                    <td>{user.adharNo}</td>
                    <td>{user.mobileNo}</td>
                    <td>{user.createdBy}</td>
                    <td>{user.lastUpdated}</td>
                    {/* <td>{JSON.stringify(user.qrCodes,null,Object.keys(user.qrCode))}</td> */}
                    {/* <td>
                    {Object.keys(user.qrCodes).map( (key, i)=>{
                        return(<p key={i}>
                            <span>Key Name: {key}</span>
                            <span>{user.qrCodes.key[user.qrCodes.qrCode]}</span>
                          </p>)
                    })}
                    </td> */}
                    <td>
                      <button className="btn btn-info" onClick={(e)=>this.updateBtnHandler(user.id)}>Update</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserComponent;
