import { Link } from "react-router-dom";
import styles from "./AboutText.module.css";
export default function AboutText() {
  return (
    <div className={styles.main}>
      <h1>Sobre mí</h1>
      <p>
        Mi nombre es Nicky , y soy el creador de esta aplicación. Me encanta
        programar y desarrollar soluciones tecnológicas para resolver problemas.
        Esta aplicación es un ejemplo de lo que puedo hacer con mis habilidades.
      </p>
      <p>
        Espero que disfrutes usando esta aplicación tanto como yo disfruté
        desarrollándola.
      </p>
      <Link to="/">Home</Link>
    </div>
  );
}
