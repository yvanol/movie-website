/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./modal.css";

function Modal({ movie, toggleModal, status }) {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a
        href=""
        className="modalClose"
        onClick={(e) => {
          e.preventDefault(); // Prevent page   
          toggleModal();
        }}
      >
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1200"
        height="720"
        src={movie.video}
        title={`${movie.title} | Official Traiter`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; enrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
