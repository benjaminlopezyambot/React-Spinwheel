import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "../App.css";
import Modal from "./ResultDialog";
import ResultCard from "./ResultCard";
import Sidebar from "./SideBar";
import { toast } from "react-toastify";
import Alert from "./Alert";
const DataOptions = [
  {
    option: "$1",
    value: 1,
  },
  {
    option: "Free Spin",
    value: 1,
  },
  {
    option: "Try Again ",
    value: 0,
    style: { textColor: "rgb(239 68 68)" },
  },
  {
    option: "$1",
    value: 1,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(239 68 68)" },
  },
  {
    option: "$5",
    value: 5,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(239 68 68)" },
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
    style: { textColor: "rgb(239 68 68)" },
  },
  {
    option: "$1",
    value: 1,
  },
  {
    option: "$500",
    value: 500,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(239 68 68)" },
  },
  {
    option: "Free Spin",
    value: 1,
  },
  {
    option: "$1",
    value: 1,
  },
  {
    option: "Try Again",
    value: 0,
    style: { textColor: "rgb(239 68 68)" },
  },
  {
    option: "$5",
    value: 5,
  },
];
const backgroundColorsData = [
  "rgb(139 92 246)",
  "rgb(91 33 182)",
  "rgb(167 139 250)",
];
const outerBorderColorData = "rgb(59 7 100)";

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [credit, setCredit] = useState(1);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [results, setResults] = useState([]);
  const Win = pickIndex();
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
  };

  function handleStartSpinning() {
    if (credit > 0) {
      setMustSpin(true);
    } else {
      setShowAlert(true);
    }
  }

  function pickIndex() {
    // Array of values

    // Randomly pick a number between 0 and 999,999
    const randomNumber = Math.floor(Math.random() * 1000000);

    // If the random number is less than 900,000, pick the first two values
    if (randomNumber < 900000) {
      const tryAgainIndices = [];
      const lowerValueIndices = [];

      // Find the indices of all the "Try Again" and lower value options
      DataOptions.forEach((option, index) => {
        if (option.value === 0) {
          if (option.option === "Try Again") {
            tryAgainIndices.push(index);
          } else {
            lowerValueIndices.push(index);
          }
        }
      });

      // If there are "Try Again" options, pick a random index from those
      if (tryAgainIndices.length > 0) {
        return tryAgainIndices[
          Math.floor(Math.random() * tryAgainIndices.length)
        ];
      }

      // Otherwise, pick a random index from the lower value options
      return lowerValueIndices[
        Math.floor(Math.random() * lowerValueIndices.length)
      ];
    }

    // Otherwise, pick a random index from the entire array
    return Math.floor(Math.random() * DataOptions.length);
  }
  const hideAlert = () => {
    setShowAlert(false);
  };
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
            outerBorderWidth={10}
            outerBorderColor={outerBorderColorData}
            backgroundColors={backgroundColorsData}
            innerBorderWidth={0}
            radiusLineWidth={0}
            perpendicularText={false}
            textDistance={70}
            onStopSpinning={handleSpinStop}
            onStartSpinning={handleStartSpinning}
            innerRadius={(15, 15)}
          />
          <button
            className={`h-16 w-16 rounded-full shadow-lg shadow-yellow-800/30 ${
              credit === 0 ? "bg-yellow-600" : "bg-yellow-500"
            } text-violet-900 font-bold hover:scale-110 duration-300 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
            onClick={() => handleStartSpinning()}
          >
            Spin
          </button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} result={result} />
    </>
  );
};

export default Roulette;
