// PopupModal.js
import React from "react";
import "./model.css";
interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <p>Your Answer is correct</p>
      </div>
    </div>
  );
};

export default PopupModal;
