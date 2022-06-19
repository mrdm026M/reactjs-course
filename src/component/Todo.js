import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
      {modalIsOpen && (
        <Modal onCancel={closeHandler} onConfirm={closeHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeHandler} />}
    </div>
  );
}
