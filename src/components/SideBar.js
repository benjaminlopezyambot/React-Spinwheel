import { useState } from "react";
import ResultCard from "./ResultCard";

function Sidebar({ results, credit }) {
  const sortedData = results.sort((a, b) => b.id - a.id);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(results.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.reverse().slice(startIndex, endIndex);

  return (
    <>
      {/* {isOpen && (
        <div className="fixed inset-0 z-20 bg-gray-700 bg-opacity-80"></div>
      )} */}

      <div className="flex h-screen overflow-hidden z-25">
        <div
          className={`bg-violet-950 transform transition-all duration-500 pt-8  z-10 w-80 text-white  p-4 flex-none py-4 px-6 ${
            isOpen ? "translate-x-0" : "-translate-x-80"
          }`}
        >
          <h2 className="text-2xl text-white font-bold mb-2">Results</h2>

          <ul>
            {sortedData.length > 0 ? (
              <>
                {currentData
                  .slice(0)
                  .reverse()
                  .map((result, index) => (
                    <>
                      <ResultCard
                        key={index}
                        option={result.option}
                        value={result.value}
                        status={result.status}
                        id={result.id}
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
              <>
                <div className="flex-grow"></div>
                <div className="flex items-center justify-between  h-12">
                  {currentPage > 0 && (
                    <button
                      className="text-white inline-flex px-8 py-2 hover:bg-cyan-600 bg-cyan-500 rounded-lg font-bold"
                      onClick={handlePrevPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                        />
                      </svg>
                      &nbsp; Prev
                    </button>
                  )}
                  {currentPage < totalPages - 1 && (
                    <button
                      onClick={handleNextPage}
                      className="text-white  inline-flex px-8 py-2 hover:bg-cyan-600 bg-cyan-500 rounded-lg font-bold"
                    >
                      Next &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </>
            </>
          )}
        </div>
        {results.length > 0 && (
          <button
            className={`bg-cyan-500 z-30 text-white text-xl font-bold px-4 py-2 rounded-lg transition-all duration-500 hover:bg-cyan-600 absolute ${
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
        )}
        <div className="">
          <button
            className={`${
              credit > 0 ? "text-white bg-green" : "text-white bg-red"
            } text-xl font-bold px-4 py-2 rounded absolute top-2 left-5`}
          >
            Credit: {credit}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
