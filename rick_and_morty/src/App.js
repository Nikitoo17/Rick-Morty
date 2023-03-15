import "./App.css";
import NavBar from "./components/navBar/NavBar.jsx";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Characters from "./view/Characters/Characters";
import About from "./view/About";
import Detail from "./view/Detail.jsx";
import Landing from "./view/Landing";
import Favorites from "./view/Favorites/Favorites";

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

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "nicofadel17@gmail.com";
  const password = "cocacola17";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/characters");
    }
  }

  function logOut() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="BannerContainer">
        <div className="Banner"></div>
      </div>
      <Routes>
        <Route path="/" element={<Landing login={login} />} />
        <Route
          path="/characters"
          element={
            <Characters
              characters={characters}
              onDelete={onDelete}
              onSearch={onSearch}
              logout={logOut}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailID" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
