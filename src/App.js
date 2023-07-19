import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
        This project was coded by <a href="#">Martina Roque</a> and is{" "}
        <a href="https://github.com/Martinaroque" targer="_blank">
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
