import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/search/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="BannerContainer">
        <div className="Banner"></div>
      </div>
      <div className="SearchBar">
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
