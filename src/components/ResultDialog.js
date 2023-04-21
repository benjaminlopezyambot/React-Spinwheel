import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { CelebrateImage } from "../assets/celebrate.jpg";
function Modal({ open, onClose, result }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={onClose}
        // className="fixed z-40 inset-0 overflow-y-auto  bg-indigo-900 bg-opacity-80"
        className="fixed z-40 inset-0 overflow-y-auto  "
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex items-center transition-all justify-center min-h-screen">
              <div className=" rounded-lg p-6  mx-auto bg-white">
                <div className="flex justify-center items-center">
                  {result.value > 0 ? (
                    <img
                      src="./assets/celebrate.jpg"
                      alt="celebrate"
                      width={450}
                    />
                  ) : (
                    <img src="./assets/lose.jpg" alt="celebrate" width={250} />
                  )}
                </div>
                <div className="text-center">
                  {result.value > 0 ? (
                    <>
                      <h2
                        className={` ${
                          window.innerWidth <= 425 ? "text-4xl" : "text-7xl"
                        }font-bold leading-none  mb-7 font-sans text-yellow-400 antialiased`}
                      >
                        <span class="bg-clip-text text-transparent bg-lime-500">
                          You Won!
                        </span>
                      </h2>
                      <p
                        className={`${
                          window.innerWidth <= 425 ? "text-6xl" : "text-9xl"
                        } font-bold mb-7 font-sans text-yellow-400 antialiased`}
                      >
                        {result.option}
                      </p>
                    </>
                  ) : (
                    <>
                      <h2
                        className={`${
                          window.innerWidth <= 425 ? "text-4xl" : "text-7xl"
                        } font-bold mb-7 leading-none  font-sans text-red-500 antialiased`}
                      >
                        You Lose!
                      </h2>

                      <p
                        className={`
                        ${window.innerWidth <= 425 ? "text-xl" : "text-4xl"}
                        text-4xl 
                        font-bold mb-7 font-sans text-red-500 antialiased`}
                      >
                        {result.option}
                      </p>
                    </>
                  )}
                  <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
