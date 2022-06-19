import Todo from "./component/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello! World</h1>
      </header>
      <main>
        <Todo text="Learn ReactJs" />
        <Todo text="Learn NextJs" />
        <Todo text="Learn MongoDB" />
      </main>
    </div>
  );
}

export default App;
