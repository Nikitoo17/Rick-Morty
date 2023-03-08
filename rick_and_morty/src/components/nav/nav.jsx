import SearchBar from "../search/SearchBar";

export default function NavBar(props) {
  return (
    <div>
      <SearchBar onSearch={props.value} />
    </div>
  );
}
