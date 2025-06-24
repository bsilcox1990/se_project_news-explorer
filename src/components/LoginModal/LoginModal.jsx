import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ activeModal, handleRegisterModal, onClose }) {
  return (
    <ModalWithForm
      activeModal={activeModal}
      onClose={onClose}
      name="login-user"
      title="Sign in"
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          name="login-email"
          className="modal__input"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          name="login-password"
          className="modal__input"
          placeholder="Enter password"
        />
      </label>
      <div className="modal__button-container">
        <button className="modal__submit-button">Sign in</button>
        <button
          type="button"
          onClick={handleRegisterModal}
          className="modal__switch-button"
        >
          or <span style={{ color: "#2f71e5" }}>Sign up</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
