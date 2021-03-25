import React, { Component } from "react";
import UserServiceFetch from "../services/UserServiceFetch";

class UserComponentWithFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    UserServiceFetch.getUserWithFetch().then((res) => {
      this.setState({ users: res });
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">Users List With Fetch</h1>
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
                {/* <th>QR Code</th> */}
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

export default UserComponentWithFetch;
