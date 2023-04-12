import React from "react";

const ResultCard = ({ option, value, status }) => {
  return (
    <div
      className={`my-3 p-4 ${
        status === "Won" ? "bg-lime-500" : "bg-red-500"
      } shadow-xl rounded-xl`}
    >
      <p className={"text-4xl font-bold text-gray-100"}>You {status}</p>

      <p className="text-2xl text-gray-100 font-bold">{option}</p>
    </div>
  );
};

export default ResultCard;
