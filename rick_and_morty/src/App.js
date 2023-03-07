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
        gap: "2em",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280)`,
            backgroundSize: "100%",
            width: "50%",
            height: "15vh",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
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
    </div>
  );
}

export default App;
