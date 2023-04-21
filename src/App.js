import "./App.css";
import "./styles.css";
import Roulette from "./components/Roulette";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [result, setResult] = useState({
    option: "",
    value: "",
  });
  const [credit, setCredit] = useState(100);

  return (
    <>
      <div className="App bg-wheel">
        <Header result={result} credit={credit} />
        <div className="flex ">
          <Roulette
            resultData={result}
            setResultData={setResult}
            credit={credit}
            setCredit={setCredit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
