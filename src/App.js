import "./App.css";
import UserComponent from "./components/UserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateUserComponent from "./components/CreateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={UserComponent}></Route>
            <Route path="/getUsersList/home" component={UserComponent}></Route>
            <Route path="/addUsers-updateUsers/:id" component={CreateUserComponent}></Route>
            {/* <Route path="/update-user/:id" exact component={UpdateUserComponent}></Route> */}
            <Route path="/view-user-details/:id" component={ViewUserComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
    // <UserComponent />
  );
}

export default App;
