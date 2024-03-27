/* eslint-disable react/prop-types */
import { cancel, clock, home } from "../assets";

const Modal = ({ setShowModal }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-[#6C5D4A]/80 z-10 p-10">
      <div className="w-full h-full border-[3px] border-white rounded-[20px] backdrop-blur-sm p-4">
        <button
          type="button"
          className="absolute top-4 right-5 size-12"
          onClick={() => setShowModal(false)}
        >
          <img src={cancel} alt="cancel" className="size-full object-contain" />
        </button>

        <div className="flex flex-col items-center text-white py-16 gap-40">
          <h4 className="text-32">Guide Sheet</h4>

          <div className="flex flex-col w-full px-6">
            <div className="flex flex-col w-full">
              <h6 className="text-xl mb-6">
                So, what do you think the definition of setting is?
              </h6>
            </div>

            <div className="flex items-center w-full justify-center gap-4">
              <h6 className="text-xl">Any guesses?</h6>
              <form className="p-2 flex-grow bg-white border-2 border-gray-300 rounded-xl border-dashed">
                <input
                  type="text"
                  className="border-b-2 w-full text-black placeholder:text-black outline-none"
                  placeholder="> Setting is the time and place of a story."
                />
              </form>

              <div className="flex items-center gap-3.5">
                <span className="text-xl">Hint: </span>
                <div className="flex items-center gap-3.5">
                  <img
                    src={clock}
                    alt="clock"
                    className="size-12 object-contain"
                  />
                  <img
                    src={home}
                    alt="home"
                    className="size-12 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
