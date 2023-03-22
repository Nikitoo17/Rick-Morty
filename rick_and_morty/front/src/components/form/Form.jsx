import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

function validateUser(username) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (username) {
    if (username.length < 35) {
      if (emailRegex.test(username)) {
        return "";
      } else {
        return "Username must be a valid email address";
      }
    } else {
      return "Username cannot be longer than 35 characters";
    }
  } else {
    return "Username is required";
  }
}
function validatePassword(password) {
  const numberRegex = /\d/;
  if (!password) {
    return "Password is required";
  } else if (password.length < 6 || password.length > 10) {
    return "Password must be between 6 and 10 characters";
  } else if (!numberRegex.test(password)) {
    return "Password must contain at least one number";
  } else {
    return null;
  }
}

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
  };

  //const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const usernameError = validateUser(userData.username);
    const passwordError = validatePassword(userData.password);
    setErrors({ username: usernameError, password: passwordError });
    login(userData);
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <div className={styles.login}>
        <div>
          <label> Username: </label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        {errors.username && <div className="error">{errors.username}</div>}
        <div>
          <label>Password: </label>
          <input type="text" name="password" onChange={handleChange} />
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
        <button type="submit"> LOGIN </button>
      </div>
    </form>
  );
}
