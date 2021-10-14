import React from "react";
import data from "./data";
import "./index.css";


const UserCard = ({cardId}) => {
  return (
    <div className="card">
      <span id="counter">{data[cardId].id}/25</span>
      <h2>
        {data[cardId].name.first} {data[cardId].name.last}
      </h2>
      <h3>
        From: {data[cardId].city}, {data[cardId].country}{" "}
      </h3>
      <h3>Job Title: {data[cardId].title}</h3>
      <h3>Employer: {data[cardId].employer} </h3>
      <h3>Favorite Movies: </h3>
      <ol>
        <li>{data[cardId].favoriteMovies[0]}</li>
        <li>{data[cardId].favoriteMovies[1]}</li>
        <li>{data[cardId].favoriteMovies[2]}</li>
      </ol>
    </div>
  );
};

export default UserCard;
