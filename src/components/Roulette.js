import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "../App.css";
import Modal from "./ResultDialog";
import Sidebar from "./SideBar";
import Alert from "./Alert";
const DataOptions = [
  {
    option: "$2",
    value: 2,
  },
  {
    option: "Free Spin",
    value: 1,
  },
  {
    option: "Try Again ",
    value: 0,
    style: { textColor: "rgb(223 40 17)" },
  },
  {
    option: "$2",
    value: 2,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(223 40 17)" },
  },
  {
    option: "$5",
    value: 5,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(256 256 256)" },
  },
  {
    option: "$500",
    value: 500,
  },
  {
    option: "Free Spin",
    value: 1,
  },
  {
    option: "$10",
    value: 10,
  },
  {
    option: "Try Again ",
    value: 0,
    style: { textColor: "rgb(223 40 17)" },
  },
  {
    option: "$2",
    value: 2,
  },
  {
    option: "$500",
    value: 500,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(223 40 17)" },
  },
  {
    option: "Free Spin",
    value: 1,
  },
  {
    option: "$2",
    value: 2,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(223 40 17)" },
  },
  {
    option: "$5",
    value: 5,
  },
];
const backgroundColorsData = [
  "rgb(223 40 15)",
  "rgb(249 129 71)",
  "rgb(251 149 100)",
];
const outerBorderColorData = "rgb(242, 101, 34)";

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [credit, setCredit] = useState(100);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [results, setResults] = useState([]);
  const WinningPercentage = 1;
  const Win = chooseOption();
  const [result, setResult] = useState({
    option: "",
    value: "",
  });

  const handleSpinStop = () => {
    setResult(DataOptions[Win]);
    const checkResult = {
      option: DataOptions[Win].option,
      value: DataOptions[Win].value,
      status: DataOptions[Win].value > 0 ? "Won" : "Lose",
      id: results.length + 1,
    };
    setResults([...results, checkResult]);
    setMustSpin(false);
    setOpen(true);
    setCredit(credit - 1);
    if (DataOptions[Win].value > 0) {
      setCredit(credit + DataOptions[Win].value);
    }
  };

  function handleStartSpinning() {
    if (credit > 0) {
      setMustSpin(true);
    } else {
      setShowAlert(true);
    }
  }

  const hideAlert = () => {
    setShowAlert(false);
  };
  function chooseOption() {
    // Define the winning percentage
    const winningPercentage = 100 - WinningPercentage;

    // Generate a random number between 0 and 99
    const randomNumber = Math.floor(Math.random() * 100);

    // Check if the random number falls within the winning percentage
    if (randomNumber < winningPercentage) {
      // Filter the options to only include those with a value less than or equal to 1
      const filteredOptions = DataOptions.filter((option) => option.value <= 1);

      // Choose a random option from the filtered options
      const randomIndex = Math.floor(Math.random() * filteredOptions.length);

      // Get the index of the chosen option from the original options array
      const chosenIndex = DataOptions.indexOf(filteredOptions[randomIndex]);

      // Return the index of the chosen option
      return chosenIndex;
    } else {
      // Filter the options to only include those with a value greater than 1
      const filteredOptions = DataOptions.filter((option) => option.value > 1);

      // Choose a random option from the filtered options
      const randomIndex = Math.floor(Math.random() * filteredOptions.length);

      // Get the index of the chosen option from the original options array
      const chosenIndex = DataOptions.indexOf(filteredOptions[randomIndex]);

      // Return the index of the chosen option
      return chosenIndex;
    }
  }

  return (
    <>
      <div
        className="flex  overflow-hidden w-full h-screen "
        style={{ position: "relative" }}
      >
        {/* {results.length > 0 && ( */}
        {showAlert && (
          <Alert
            type="error"
            message="Insufficient credit balance."
            visible={showAlert}
            setShowAlert={hideAlert}
          />
        )}
        <Sidebar isOpen={true} results={results} credit={credit} />
        {/* )} */}
        <div
          style={{
            width: "100%",
            position: "absolute",
            height: "100%",
            zIndex: 9,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Wheel
            // startingOptionIndex={0}
            mustStartSpinning={mustSpin}
            prizeNumber={Win}
            data={DataOptions}
            textColors={["#ffffff"]}
            fontSize={15}
            outerBorderWidth={16}
            outerBorderColor={outerBorderColorData}
            backgroundColors={backgroundColorsData}
            innerBorderWidth={0}
            radiusLineWidth={0}
            perpendicularText={false}
            textDistance={70}
            onStopSpinning={handleSpinStop}
            onStartSpinning={handleStartSpinning}
            innerRadius={(0, 0)}
          />
          <button
            className={`h-16 w-16 rounded-full shadow-lg shadow-yellow-800/30 ${
              credit === 0 ? "bg-yellow" : "bg-yellow spining-btn"
            } text-violet-900 font-bold hover:scale-110 duration-300 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
            onClick={() => handleStartSpinning()}
          >
            <span>Spin</span>
          </button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} result={result} />
    </>
  );
};

export default Roulette;
