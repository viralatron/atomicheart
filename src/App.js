import logo from "./logo.svg";
import "./App.scss";

function App() {
  function play() {
    console.log("play");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => play()}>Play!</button>
      </header>
    </div>
  );
}

export default App;
