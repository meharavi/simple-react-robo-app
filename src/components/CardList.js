import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    < div >
      {
        robots.map((char, i) => {
          return (
            <Card
              key={i}
              id={char.id}
              name={char.name}
              username={char.username}
              email={char.email}
            />
          );
        })
      }
    </div >
  );
};

export default CardList;