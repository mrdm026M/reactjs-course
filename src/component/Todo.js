export default function Todo(props) {
  function deleteHandler() {
    console.log("clicked");
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}
