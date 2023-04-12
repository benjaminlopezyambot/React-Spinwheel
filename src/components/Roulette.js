import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "../App.css";
import Modal from "./ResultDialog";
import ResultCard from "./ResultCard";
const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const data = [
    {
      option: "$5",
      value: "5",
    },
    {
      option: "$500",
      value: "500",
    },
    {
      option: "$10",
      value: "10",
    },
    {
      option: "Try Again ",
      value: "0",
    },
    {
      option: "$500",
      value: "500",
    },
    {
      option: "Try Again",
      value: "0",
    },
    {
      option: "$1",
      value: "1",
    },
    {
      option: "Try Again",
      value: "0",
    },
    {
      option: "$5",
      value: "5",
    },
    {
      option: "Free Spin",
      value: "1",
    },
    {
      option: "$25",
      value: "25",
    },
    {
      option: "$12",
      value: "12",
    },
  ];
  const backgroundColorsData = [
    "rgb(139 92 246)",
    "rgb(91 33 182)",
    "rgb(167 139 250)",
  ];
  const outerBorderColorData = "rgb(59 7 100)";
  const [results, setResults] = useState([]);
  const Win = Math.floor(Math.random() * data.length);
  // const Win = 3;
  const [result, setResult] = useState({
    option: "",
    value: "",
  });
  const handleSpinStop = () => {
    setResult(data[Win]);
    const checkResult = {
      option: data[Win].option,
      value: data[Win].value,
      status: data[Win].value > 0 ? "Won" : "Lost",
    };
    setResults([...results, checkResult]);
    setMustSpin(false);
    setOpen(true);
  };
  function handleStartSpinning() {
    setMustSpin(true);
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="flex  overflow-hidden w-full h-screen"
        style={{ position: "relative" }}
      >
        <div
          className="w-1/5 p-4"
          style={{
            height: "50%",
          }}
        >
          <ul>
            {results.length > 0 ? (
              <>
                <h2 className="text-2xl text-white font-bold mb-2">Results</h2>
                {results
                  .slice(0)
                  .reverse()
                  .map((result, index) => (
                    <>
                      <ResultCard
                        key={index}
                        option={result.option}
                        value={result.value}
                        status={result.status}
                      />
                    </>
                  ))}
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
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
            data={data}
            textColors={["#ffffff"]}
            fontSize={15}
            outerBorderWidth={10}
            outerBorderColor={outerBorderColorData}
            backgroundColors={backgroundColorsData}
            innerBorderWidth={0}
            radiusLineWidth={0}
            perpendicularText={true}
            textDistance={80}
            onStopSpinning={handleSpinStop}
            onStartSpinning={handleStartSpinning}
            innerRadius={(15, 15)}
          />
          <button
            className="h-16 w-16 rounded-full shadow-lg shadow-yellow-800/30 bg-yellow-500 text-violet-900 font-bold hover:scale-110 duration-300 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            onClick={() => setMustSpin(!mustSpin)}
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
