import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/nav/nav";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  function onDelete(id) {
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  }

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          const duplicado = characters.some(
            (character) => character.id === data.id
          );
          if (duplicado) {
            window.alert("Este personaje ya ha sido agregado");
          } else {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App">
      <div className="BannerContainer">
        <div className="Banner"></div>
      </div>
      <div className="SearchBar">
        <NavBar value={onSearch} />
      </div>
      <div>
        <Cards characters={characters} value={onDelete} />
      </div>
    </div>
  );
}

export default App;
