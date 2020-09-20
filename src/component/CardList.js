import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="cardList">
        {robots.map((robot) => {
          return (
            <Card
              className="card"
              key={robot.id}
              id={robot.id}
              name={robot.name}
              email={robot.email}
            />
          );
        })}
    </div>
  );
};

export default CardList;
