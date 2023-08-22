import React, { useState } from "react";
import "./centerpart.css";
import PopupModal from "../Components/model";
const Centerpart = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage(message);
    if (message === "open") {
      handleOpenModal();
    } else {
      alert("Please enter the correct message");
    }
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="centerpart">
        <input
          type="text"
          placeholder="Search.."
          id="message"
          onChange={handleChange}
          value={message}
        />
        <button className="submit-button" onClick={handleClick} type="submit">
          Submit
        </button>
      </div>
      <PopupModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
export default Centerpart;
