import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <Weather city="lisbon" />

      <footer>
        This project was coded by{" "}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Martina Roque
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Martinaroque"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
