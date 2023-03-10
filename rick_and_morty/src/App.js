import "./App.css";
import NavBar from "./components/navBar/NavBar.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "./view/Characters";
import About from "./view/About";
import Detail from "./view/Detail.jsx";

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
    <div>
      <div>
        <NavBar />
      </div>
      <div className="BannerContainer">
        <div className="Banner"></div>
      </div>
      <Routes>
        <Route
          path="/characters"
          element={
            <Characters
              characters={characters}
              onDelete={onDelete}
              onSearch={onSearch}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailID" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
