import { useState } from "react";
import ResultCard from "./ResultCard";

function Sidebar({ results }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    
    <div className="flex h-screen overflow-hidden">
      <div
        className={`bg-violet-950 transform transition-all duration-500 pt-8  z-10 w-80 text-white  p-4 flex-none py-4 px-6 ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        <h2 className="text-2xl text-white font-bold mb-2">Results</h2>

        <ul>
          {results.length > 0 ? (
            <>
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
        {results.length >= 5 && (
          <>
            <div className="flex-grow"></div>
            <div className="flex items-center justify-center  h-12">
              <button className="text-white px-8 py-2 bg-cyan-500 rounded-lg font-bold">
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <button
        className={`bg-red-600 z-10 text-white text-xl font-bold px-4 py-2 rounded-lg transition-all duration-500 hover:bg-rose-500 absolute ${
          window.innerWidth <= 425 ? "top-2" : "top-4"
        } ${window.innerWidth <= 425 ? "right-2" : "right-5"} `}
        onClick={toggleSidebar}
      >
        {window.innerWidth <= 425 ? (
          <span className="material-icons">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              "Results"
            )}
          </span>
        ) : (
          <span className="material-icons">
            {isOpen ? "Hide Results" : "Show Results"}
          </span>
        )}
      </button>
    </div>
  );
}

export default Sidebar;
