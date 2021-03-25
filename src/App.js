import "./App.css";
import UserComponent from "./components/UserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateUserComponent from "./components/CreateUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={UserComponent}></Route>
            <Route path="/getUsersList" component={UserComponent}></Route>
            <Route path="/addUsers" component={CreateUserComponent}></Route>
            <Route path="/update-user/:id" exact component={UpdateUserComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
    // <UserComponent />
  );
}

export default App;
