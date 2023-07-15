import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { useState } from "react";

const example = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {
     name: 'Earth (C-137)',
     url: 'https://rickandmortyapi.com/api/location/1',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          console.log('no hay info');
       }
    });

  }
  
  function onClose(id) {
    const newCharacters = characters.filter(character => character.id !== Number(id));

    setCharacters(newCharacters);
  }

  return (
    <>
    <Nav onSearch={onSearch}/>
    <Cards characters={characters} onClose={onClose}/>
    </>
  );
}

export default App;
