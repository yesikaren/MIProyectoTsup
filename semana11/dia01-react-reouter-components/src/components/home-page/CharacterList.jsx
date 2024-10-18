import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const fetchCharacters = async () => {
  const URL = "https://dragonball-api.com/api/characters";
  const response = await fetch(URL);
  return await response.json();
};

const CharacterList = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetchCharacters().then((results) => {
      console.log(results.items);
      setPersonajes(results.items);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 ">
      {personajes.map((personaje) => (
        <Link    key={personaje.id} to={`/character/${personaje.id}`}>
          <div
         
            className="flex justify-center items-center flex-col"
          >
            <img src={personaje.image} alt="" className="h-48" />
            <p className="text-white mt-6"> {personaje.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
