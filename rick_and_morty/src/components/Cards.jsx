import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  const personajes = characters.map((character) => (
    <Card
      key={character.id}
      onClose={() => window.alert("Emulamos que se cierra la card")}
      name={character.name}
      image={character.image}
      species={character.species}
      gender={character.gender}
    />
  ));
  return <div className="Cards">{personajes}</div>;
}
