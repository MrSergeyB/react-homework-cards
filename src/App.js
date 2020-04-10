import React from "react";
import Cards from "./components/cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cards img={require("./assets/noimg.png")} />
    </div>
  );
}

export default App;
