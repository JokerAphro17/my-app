import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1 className="countries">COUNTRIES</h1>
      <ul>
        {data.map((pays, index) =>  <li key ={index}>{pays.translations.fra.common}</li>)}
      </ul>
    </div>
  );
}

export default Countries;
