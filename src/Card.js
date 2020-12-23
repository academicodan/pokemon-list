import React from "react";
import "./card.css";

const Card = ({ userData }) => {
  const pokemonNuber = userData.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");
  const imageUrl =
    "https://pokeres.bastionbot.org/images/pokemon/" + pokemonNuber + ".png";

  return (
    <ul className="ui cards flex-box">
      <li className="ui card">
        <div className="ui fluid card">
          <div className="image">
            <img className="ui tiny image" src={imageUrl} />
          </div>
          <div className="content">
            <a className="header">{userData.name}</a>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default Card;
