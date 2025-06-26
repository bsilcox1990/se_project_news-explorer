import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegisterModal({ activeModal, onClose, handleLoginModal, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "register-email") {
      setEmail(e.target.value);
    } else if (e.target.name === "register-password") {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      username: username,
    };
    onRegister(user);
  };

  return (
    <ModalWithForm
      name="register-user"
      title="Sign up"
      activeModal={activeModal}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          type="email"
          name="register-email"
          value={email || ""}
          onChange={handleChange}
          className="modal__input"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          type="password"
          name="register-password"
          className="modal__input"
          value={password || ""}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </label>
      <label htmlFor="register-username" className="modal__label">
        Username
        <input
          type="text"
          name="register-username"
          minLength="2"
          maxLength="20"
          value={username || ""}
          onChange={handleChange}
          className="modal__input"
          placeholder="Enter your username"
        />
      </label>
      <div className="modal__button-container">
        <button type="submit" className="modal__submit-button">
          Sign up
        </button>
        <button
          type="button"
          onClick={handleLoginModal}
          className="modal__switch-button"
        >
          or <span style={{ color: "#2f71e5" }}>Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
