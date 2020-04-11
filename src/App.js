import React from "react";
import Cards from "./components/cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cards
        img={require("./assets/noimg.png")}
        title="Кофе"
        text="Сорта кофе в нашем кафе"
        button="Узнать больше"
      />
    </div>
  );
}

export default App;
