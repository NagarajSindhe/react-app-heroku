import React, { Component } from "react";
import UsersService from "../services/UsersService";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

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
  createUser = () => {
    this.props.history.push("/addUsers-updateUsers/-1");
  };
  updateBtnHandler = (id) => {
    this.props.history.push(`/addUsers-updateUsers/${id}`);
  };
  deleteBtnHandler = (id) => {
    UsersService.deleteUsers(id).then((res) => {
      // this.props.history.push("/getUsersList");
      //this.componentDidMount();
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  };
  viewBtnHandler = (id) => {
    this.props.history.push(`/view-user-details/${id}`);
  };
  render() {
    console.log(this.state.users);
    return (
      <div>
        <div>
          <br></br>
          <div className="row table-responsive">
            <button
              className="btn btn-sm btn-primary m-3"
              onClick={this.createUser}
            >
              <FaUserPlus/>
            </button>
          </div>
          <table className="table table-hover table-sm">
            <thead className="bg-info text-white">
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
                      <button
                        className="btn btn-sm btn-info m-1"
                        onClick={(e) => this.updateBtnHandler(user.id)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger m-1"
                        onClick={(e) => this.deleteBtnHandler(user.id)}
                      >
                        <MdDelete/>
                      </button>

                      <button
                        className="btn btn-sm btn-success m-1"
                        onClick={(e) => this.viewBtnHandler(user.id)}
                      >
                       <MdVisibility/>
                      </button>
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
