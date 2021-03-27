import React, { Component } from "react";
import UsersService from "../services/UsersService";
class CreateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      fname: "",
      mName: "",
      lname: "",
      adharNo: "",
      mobileNo: "",
    };
  }
  componentDidMount = () => {
    //To get data from api and load into each text box while update
    if(this.state.id === '-1'){
      return;
    }else{
    UsersService.getUserById(this.state.id).then((res) => {
      let users = res.data;
      this.setState({
        fname: users.fname,
        mName: users.mName,
        lname: users.lname,
        adharNo: users.adharNo,
        mobileNo: users.mobileNo,
      });
      console.log(JSON.stringify(users));
    });
  }
  };
  getTitle = () => {
    return this.state.id === "-1" ? "Create user" : "Update user";
  };
  createOrupdateUser = (e) => {
    e.preventDefault();
    let user = {
      fname: this.state.fname,
      mName: this.state.mName,
      lname: this.state.lname,
      adharNo: this.state.adharNo,
      mobileNo: this.state.mobileNo,
    };
    console.log(user);
    if (this.state.id !== "-1") {
      UsersService.updateUsers(this.state.id, user).then((res) => {
        this.props.history.push("/getUsersList/home");
      });
    } else {
      UsersService.addUsers(user).then((res) => {
        this.props.history.push("/getUsersList/home");
      });
    }
  };
  cancelCreateUser = () => {
    this.props.history.push("/getUsersList/home");
  };
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">{this.getTitle()}</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
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
                    <label>Middle Name:</label>
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
                    <label>Last Name:</label>
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
                    <label>Adhar No:</label>
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
                    <label>Mobile:</label>
                    <input
                      name="mobileNo"
                      className="form-control"
                      value={this.state.mobileNo}
                      onChange={(e) => {
                        this.setState({ mobileNo: e.target.value });
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={this.createOrupdateUser}
                  >
                    {this.getTitle()}
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
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
