import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Countries() {
  const [data, setData] = useState([]);
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
      <ul>
        {data.map((pays, index) => (
          <Card key={index} country={pays} />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
