import React, { Component } from "react";
import UsersService from "../services/UsersService";
//import { BiArrowBack } from "react-icons/bi";
import "../App.css";
//import { BsChevronDoubleUp } from "react-icons/bs";
//import { BsChevronDoubleDown } from "react-icons/bs";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
//import { FcCollapse, FcExpand, FcLeft } from "react-icons/fc";
//import { IoArrowBackOutline } from "react-icons/io5";

import leftArrow from '/Users/nagarajsubhashsindhe/react-crud-with-spring-boot/src/components/leftArrow.png';
class ViewUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      users: [],
      showBasic: true,
      showTanscation: true,
      showQr: true,
      show: true,
    };
  }
  componentDidMount = () => {
    //To get data from api and load into each text box while update
    if (this.state.id === "-1") {
      return;
    } else {
      UsersService.getUserById(this.state.id).then((res) => {
        let users = res.data;
        this.setState({
          users: res.data,
        });
        console.log(JSON.stringify(users));
      });
    }
  };
  home = () => {
    this.props.history.push("/getUsersList/home");
  };
  toggleBasic = () => {
    // alert("clicked");
    this.setState({ showBasic: !this.state.showBasic });
  };
  toggleQr = () => {
    this.setState({ showQr: !this.state.showQr });
  };
  toggleTransaction = () => {
    this.setState({ showTanscation: !this.state.showTanscation });
  };
  //toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  render() {
    return (
      <div>
        {/* <div>
          <button onClick={this.toggle}>
            toggle: {this.state.show ? "show" : "hide"}
          </button>
          {this.state.show && <div>Hi there</div>}
        </div> */}
        <br></br>
        <div className="container text-wrap viewFonts">
          <div className="card">
            <div className="col-xm-8 align-items-end">
              <div className=" text-primary  float-right" onClick={this.home}>
                {/* <BiArrowBack /> */}
                <div>
                <img alt="back" width="40px" height="15px" src={leftArrow} />
                </div>
                <span className="glyphicon glyphicon-arrow-left"></span>
              </div>
            </div>
            <div className="card-header bg-info text-white">
              Basic Details
              <div className="float-right" onClick={this.toggleBasic}>
                {this.state.showBasic === true ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </div>
            </div>

            {this.state.showBasic ? (
              <div className="card-body">
                <div className="row align-items-start">
                  <div className="col m-1">
                    <label>First Name:</label>
                    <div className="font-weight-light">
                      {this.state.users.fname}
                    </div>
                  </div>
                  <div className="col m-1">
                    <label className="">Middle Name:</label>
                    <div className="font-weight-light">
                      {this.state.users.mName}
                    </div>
                  </div>
                  <div className="col m-1">
                    <label className="">Last Name:</label>
                    <div className="font-weight-light">
                      {this.state.users.lname}
                    </div>
                  </div>
                  <div className="col m-1">
                    <label className="">Adhar no.:</label>
                    <div className="font-weight-light">
                      {this.state.users.adharNo}
                    </div>
                  </div>
                </div>

                <div className="row align-items-start">
                  <div className="col m-1">
                    <label className="">Mobile no :</label>
                    <div className="font-weight-light">
                      {this.state.users.mobileNo}
                    </div>
                  </div>
                  <div className="col">
                    <label>Created:</label>
                    <div className="font-weight-light">
                      {this.state.users.created}
                    </div>
                  </div>
                  <div className="col">
                    <label>Last updated:</label>
                    <div className="font-weight-light">
                      {this.state.users.lastUpdated}
                    </div>
                  </div>

                  <div className="col">
                    <label>QR No:</label>
                    <div className="font-weight-light">
                      {this.state.users.qrText}
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col m-1">
                    <label className="">Created By:</label>
                    <div className="font-weight-light">
                      {this.state.users.createdBy}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              false
            )}
          </div>
          <div className="card" onClick={this.toggleQr}>
            <div className="card-header bg-info text-white">
              QR Details
              <div className="float-right" onClick={this.showQr}>
                {this.state.showQr === true ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {this.state.showQr ? (
              <div className="card-body">
                <div>Qr Details</div>
              </div>
            ) : null}
          </div>
          <div className="card" onClick={this.toggleTransaction}>
            <div className="card-header bg-info text-white">
              Transaction Details
              <div className="float-right" onClick={this.showTanscation}>
                {this.state.showTanscation === true ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </div>
            </div>
            {this.state.showTanscation ? (
              <div className="card-body">
                <di>Transaction Management</di>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
