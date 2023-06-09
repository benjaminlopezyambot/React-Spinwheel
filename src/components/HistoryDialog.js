import { useState } from "react";
import Modal from "react-modal";
import SpinHistory from "./HistoryElements/SpinHistory";
import WinningHistory from "./HistoryElements/WinningHistory";
import classNames from "classnames";

Modal.setAppElement("#root"); // set the app element for accessibility purposes

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1000px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.3)",
    border: "none",
  },
};
const tabs = [
  { id: "spin-history", label: "Spin History" },
  { id: "winning-history", label: "Winning History" },
];

const TabButton = ({ tab, activeTab, onClick }) => (
  <button
    className={classNames(
      "text-md font-medium",
      tab.id === activeTab
        ? `
        ${
          activeTab === "winning-history" &&
          "border-b-2  border-lime-500 text-lime-500"
        }
        ${
          activeTab === "spin-history" &&
          "border-b-2  border-cyan-500 text-cyan-500"
        }`
        : "text-gray-500 hover:text-gray-700",
      "py-2 px-4 focus:outline-none "
    )}
    onClick={() => onClick(tab.id)}
  >
    {tab.label}
  </button>
);

const TabPanel = ({ tab, activeTab, children }) => (
  <div className={classNames(tab.id === activeTab ? "" : "hidden")}>
    {children}
  </div>
);

const HistoryDialog = ({ modalIsOpen, handleModalOpen, results }) => {
  const [activeTab, setActiveTab] = useState("spin-history");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalOpen}
        style={customStyles}
      >
        <button
          className="absolute top-0 right-0 m-4"
          onClick={handleModalOpen}
        >
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="border-b border-gray-200">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          ))}
        </div>
        <div className="mt-4">
          {tabs.map((tab) => (
            <TabPanel key={tab.id} tab={tab} activeTab={activeTab}>
              {activeTab === "spin-history" && (
                <SpinHistory results={results} />
              )}
              {activeTab === "winning-history" && (
                <WinningHistory results={results} />
              )}
            </TabPanel>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default HistoryDialog;
