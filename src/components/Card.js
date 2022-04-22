import React from "react";

function Card({ country }) {
  return (
    <li className="card">
      <img src={country.flags.svg} alt="" />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop: {country.population}</p>
      </div>
    </li>
  );
}

export default Card;
