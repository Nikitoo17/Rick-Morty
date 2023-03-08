import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/search/SearchBar";
import NavBar from "./components/nav/nav";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setCharacters((characters) => [...characters, data]);
          console.log(characters);
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
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
