import "./App.css";
import { NavBar } from "./View/Header/NavBar/navBar";
import MainBody from "./View/MainBody/mainBody";
function App() {
  return (
    <div className="App">
      <NavBar name="prabin" />
      <MainBody />
    </div>
  );
}

export default App;
