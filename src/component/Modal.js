export default function Modal() {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <div>
        <button className="btn btn--alt">Cancel</button>
        <button className="btn">Confirm</button>
      </div>
    </div>
  );
}
