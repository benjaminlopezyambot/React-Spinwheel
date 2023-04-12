import React from "react";

const ResultDrawer = ({ result, isOpen, onClose }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transition duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Your drawer content goes here */}
      <div className="px-4 my-4">
        <h2 className="text-lg font-bold mb-4">Result</h2>
        <p className="text-gray-700">{result}</p>
      </div>

      {/* Close button */}
      <button
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.707 5.293a1 1 0 0 1 1.414 0L12 10.586l3.879-3.88a1 1 0 1 1 1.414 1.414L13.414 12l3.879 3.879a1 1 0 1 1-1.414 1.414L12 13.414l-3.879 3.879a1 1 0 0 1-1.414-1.414L10.586 12 6.707 8.121a1 1 0 0 1 0-1.414z" />
        </svg>
      </button>
    </div>
  );
};

export default ResultDrawer;
