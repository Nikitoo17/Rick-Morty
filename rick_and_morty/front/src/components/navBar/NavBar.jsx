import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav>
      <ul className={styles.main}>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Logout </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
