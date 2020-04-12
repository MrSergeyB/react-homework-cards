import React from "react";
import Card from "./components/card";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Card
        title="Кофе это наше все"
        text="В качестве CSS вы можете использовать Bootstrap, а подглядеть"
        button="Узнать больше"
      />
      <br></br>
      <br></br>

      <Card
        title="Кофе это наше все"
        text="в этой карточке должно быть изображение"
        button="Узнать больше"
      >
        <img src={require("./assets/noimg.png")} style={{height: "10em"}} />
      </Card>
    </div>
  );
}

export default App;
