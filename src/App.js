import "./App.css";
import UserComponent from "./components/UserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
//import UserComponentWithFetch from "./components/UserComponentWithFetch";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <UserComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
