import { useState } from "react";
export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const handleSubmit = (event) => {
    console.log(props);
    event.preventDefault();
    props.onSearch(character);
  };

  const handleInputChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
}
