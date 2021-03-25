import logo from "./logo.svg";
import "./App.css";
import UserComponent from "./components/UserComponent";
import UserComponentWithFetch from "./components/UserComponentWithFetch";

function App() {
  return (
    <div className="App">
      <UserComponent />
      <hr></hr>
      <UserComponentWithFetch />
    </div>
  );
}

export default App;
