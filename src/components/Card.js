import React from "react";

const Card = ({ id, name, username, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='chars' src={`https://robohash.org/${id}`} width="200" height="200" />
      <div>
        <h2>{name}</h2>
        <p>{username}<br /><br />{email}</p>
      </div>
    </div >
  );
};

export default Card;