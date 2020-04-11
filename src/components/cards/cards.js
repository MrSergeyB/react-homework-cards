import React from "react";
import Card from "../card";
const Cards = (props) => {
  return (
    <div className="container">
      <Card>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="!#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
      </Card>

      <Card>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="!#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
