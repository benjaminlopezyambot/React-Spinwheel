import { useState } from "react";
import Modal from "react-modal";
import classnames from "classnames";
import SpinHistory from "./HistoryElements/SpinHistory";
import WinningHistory from "./HistoryElements/WinningHistory";
import Rules from "./HistoryElements/Rules";

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
    maxWidth: "600px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.3)",
    border: "none",
  },
};

const HistoryDialog = ({ isOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("spin-history");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setModalIsOpen(true)}
      >
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="flex justify-between mb-4">
          <button
            className={classnames(
              "py-2 rounded-xl text-lg font-semibold px-4 ",
              {
                "bg-cyan-400 text-white": activeTab === "spin-history",
                "hover:bg-cyan-500 hover:text-white":
                  activeTab !== "spin-history",
              }
            )}
            onClick={() => handleTabClick("spin-history")}
          >
            Spin History
          </button>
          <button
            className={classnames(
              "py-2 text-lg  rounded-xl font-semibold px-4",
              {
                "bg-cyan-400 text-white": activeTab === "winning-history",
                "hover:bg-cyan-500 hover:text-white":
                  activeTab !== "winning-history",
              }
            )}
            onClick={() => handleTabClick("winning-history")}
          >
            Winning History
          </button>
          <button
            className={classnames(
              "py-2 text-lg  rounded-xl font-semibold px-4",
              {
                "bg-cyan-400 text-white": activeTab === "rules",
                "hover:bg-cyan-500 hover:text-white": activeTab !== "rules",
              }
            )}
            onClick={() => handleTabClick("rules")}
          >
            Rules
          </button>
        </div>
        <div>
          {activeTab === "spin-history" && <SpinHistory />}
          {activeTab === "winning-history" && <WinningHistory />}
          {activeTab === "rules" && <Rules />}
        </div>
      </Modal>
    </>
  );
};

export default HistoryDialog;
