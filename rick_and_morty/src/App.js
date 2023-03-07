import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/search/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div
      style={{
        padding: "25px 25px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "0px",
          margin: "0px",
          width: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></div>
      <div>
        <Cards characters={characters} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
        }}
      >
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}

export default App;
