import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Countries() {
  const [data, setData] = useState([]);
  const [range, setRange] = useState(20);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");
  // le useEffect permet de faire une requête à l'API pour récupérer les données
  // et les stocker dans le state.
  // Le useEffect est appelé à chaque fois que le state change.
  // Le useEffect est appelé une seule fois au chargement de la page.
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          onChange={(e) => {
            setRange(e.target.value);
            console.log(e.target.value);
          }}
          defaultValue={range}
        />
        {radios.map((continent) => {
          return (
            <li>
              <input
                type="radio"
                id={continent}
                checked={selectedRadio === continent}
                name="radioContinent"
                onChange={(e) => {
                  setSelectedRadio(e.target.id);
                }}
              />
              <label htmlFor={continent}>{continent}</label>{" "}
            </li>
          );
        })}
      </ul>
      {selectedRadio !== "" && (
        <button onClick={() => setSelectedRadio("")}>Annuler la recher</button>
      )}
      <ul>
        {data
          .filter((pays) => pays.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, range)
          .map((pays, index) => (
            <Card key={index} country={pays} />
          ))}
      </ul>
    </div>
  );
}

export default Countries;
