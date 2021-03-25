import React, { Component } from "react";
import UsersService from "../services/UsersService";
class CreateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mName: "",
      lname: "",
      adharNo: "",
      mobileNo: "",
    };
  }
  createUser = (e) => {
    e.preventDefault();
    let user = {
        fname: this.state.fname,
      mName: this.state.mName,
      lname: this.state.lname,
      adharNo: this.state.adharNo,
      mobileNo: this.state.mobileNo,
    };
    console.log(user);
    UsersService.addUsers(user).then((res) => {
      this.props.history.push("/getUsersList");
    });
    //alert("create" + e.target.value);
  };
  cancelCreateUser = () => {
    this.props.history.push("/getUsersList");
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Create User</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      name="fname"
                      className="form-control"
                      value={this.state.fname}
                      onChange={(e) => {
                        this.setState({ fname: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Middle Name</label>
                    <input
                      name="mName"
                      className="form-control"
                      value={this.state.mName}
                      onChange={(e) => {
                        this.setState({ mName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      name="lname"
                      className="form-control"
                      value={this.state.lname}
                      onChange={(e) => {
                        this.setState({ lname: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Adhar No</label>
                    <input
                      name="adharNo"
                      className="form-control"
                      value={this.state.adharNo}
                      onChange={(e) => {
                        this.setState({ adharNo: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      name="mobileNo"
                      className="form-control"
                      value={this.state.mobileNo}
                      onChange={(e) => {
                        this.setState({ mobileNo: e.target.value });
                      }}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.createUser}>
                    Create
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={this.cancelCreateUser}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
