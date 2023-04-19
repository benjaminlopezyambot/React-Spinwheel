import "./App.css";
import "./styles.css";
import Roulette from "./components/Roulette";

function App() {
  return (
    <>
      <div className="App bg-wheel">
        <div className="flex">
          <Roulette />
        </div>
      </div>
    </>
  );
}

export default App;
