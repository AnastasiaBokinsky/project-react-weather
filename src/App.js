import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Weather />
        <footer>
          This project was coded by Anastasiia Boiko and it is{" "}
          <a
            href="https://github.com/AnastasiaBokinsky/project-react-weather.git"
            rel="noreferrer"
          >
            {" "}
            onen-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
