import React from "react";
import Card from "../card";
const Cards = (props) => {
  return (
    <div className="container">
      <Card>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="!#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Card>

      <Card>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="!#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
