import React from "react";
import { Wheel } from "react-custom-roulette";
import "../App.css";
const Roulette = () => {
  const [mustSpin, setMustSpin] = React.useState(false);

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
      value: "0",
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

  const Win = Math.floor(Math.random() * data.length);
  return (
    <div
      className="flex content-center justify-center  h-screen"
      style={{ position: "relative" }}
    >
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
          startingOptionIndex={0}
          mustStartSpinning={mustSpin}
          prizeNumber={Win}
          data={data}
          textColors={["#ffffff"]}
          fontSize={15}
          outerBorderWidth={15}
          outerBorderColor={"rgb(59 7 100)"}
          backgroundColors={[
            "rgb(139 92 246)",
            "rgb(91 33 182)",
            "rgb(167 139 250)",
          ]}
          innerBorderWidth={0}
          radiusLineWidth={1}
          perpendicularText={true}
          textDistance={80}
          onStopSpinning={() => setMustSpin(false)}
          innerRadius={(18, 18)}
        />
        <button
          className="h-16 w-16 rounded-full shadow-lg shadow-cyan-500/50  bg-violet-50 text-violet-900 font-bold hover:scale-110 duration-300 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          onClick={() => setMustSpin(!mustSpin)}
        >
          Spin
        </button>
      </div>
    </div>
  );
};

export default Roulette;
