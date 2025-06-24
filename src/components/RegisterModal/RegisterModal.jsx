import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ activeModal, onClose, handleLoginModal }) {
  return (
    <ModalWithForm
      name="register-user"
      title="Sign up"
      activeModal={activeModal}
      onClose={onClose}
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          type="text"
          name="register-email"
          className="modal__input"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          type="text"
          name="register-password"
          className="modal__input"
          placeholder="Enter password"
        />
      </label>
      <label htmlFor="register-username" className="modal__label">
        Username
        <input
          type="text"
          name="register-username"
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
