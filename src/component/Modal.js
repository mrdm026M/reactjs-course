export default function Modal(props) {
  function closeHandler() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <div>
        <button className="btn btn--alt" onClick={closeHandler}>
          Cancel
        </button>
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}
