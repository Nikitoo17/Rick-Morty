import Form from "../../components/form/Form";
import styles from "./Landing.module.css";
export default function Landing({ login }) {
  return (
    <div className={styles.main}>
      <img
        className={styles.welcome}
        src="https://i.pinimg.com/originals/4b/fa/3d/4bfa3d4defc8e015c5898446d8d5b35c.png"
        alt="welcome"
      />
      <Form login={login} />
    </div>
  );
}
