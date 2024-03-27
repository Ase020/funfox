import { useState } from "react";
import {
  bag,
  book,
  clock,
  coldRainy,
  hat,
  home,
  pencil,
  question,
  ruler,
  sunnyBeach,
} from "../assets";
import { Modal } from "../components";

const Week2 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-[calc(100%-112px)] h-[694px] rounded-[20px] mx-auto bg-white p-5 flex flex-col items-center justify-center gap-1 lg:gap-2">
      <div className="w-full flex items-start gap-2 flex-col">
        <h4 className="text-2xl lg:text-32">
          Can you figure out the definition of setting from the following
          examples?
        </h4>

        <p className="text-lg lg:text-2xl">
          (take a minute to think about this)
        </p>
      </div>

      <div className="flex flex-row justify-between items-start space-x-10 lg:space-x-40">
        <figure className="flex flex-col justify-center items-center gap-1 lg:gap-2 max-w-72">
          <img
            src={sunnyBeach}
            alt="sunny-beach"
            className="border-2 px-5 lg:px-8 py2 lg:py-3 border-dashed w-60 h-40 object-cover"
          />

          <figcaption className="text-base lg:text-xl text-center">
            Sunny day at a beach
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-center items-center gap-1 lg:gap-2 max-w-72">
          <img
            src={coldRainy}
            alt="cold rainy night"
            className="border-2 px-5 lg:px-8 py2 lg:py-3 border-dashed w-60 h-40 object-cover"
          />

          <figcaption className="text-base lg:text-xl text-center">
            A cold rainy night in a haunted house in October
          </figcaption>
        </figure>
      </div>

      <div className="flex flex-col w-full">
        <h6 className="text-lg lg:text-xl">
          So, what do you think the definition of setting is?
        </h6>
      </div>

      <div className="flex items-center w-full justify-center gap-2 lg:gap-4">
        <h6 className="text-base lg:text-xl">Any guesses?</h6>
        <form className="p-2 flex-grow border-2 border-dashed">
          <input type="text" className="border-b-2 w-full outline-none" />
        </form>

        <div className="flex items-center gap-3.5">
          <span className="text-base lg:text-xl">Hint: </span>
          <div className="flex items-center gap-2 lg:gap-3.5">
            <img
              src={clock}
              alt="clock"
              className="size-8 lg:size-12 object-contain"
            />
            <img
              src={home}
              alt="home"
              className="size-8 lg:size-12 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="bg-green-2 w-full border-2 border-dashed px-3.5 py-2.5 text-white text-lg lg:text-2xl flex flex-wrap gap-1">
        <p className="text-nowrap h-8">Setting is the time </p>
        <img src={clock} alt="clock" className="size-7" />
        <p className="text-nowrap h-8">and place </p>
        <img src={home} alt="home" className="size-7" />
        <p className="h-8 text-wrap">of a story. It often answers the</p>
        <p className="h-8">questions: when? and where?</p>
      </div>

      <p className="text-base lg:text-lg mt-2 lg:mt-0">
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>

      {showModal && <Modal setShowModal={setShowModal} />}

      <div className="flex items-center justify-between flex-col absolute top-16 lg:top-32 left-0 h-[calc(100vh-140px)]">
        <img src={pencil} alt="pencil" className="size-14" />
        <img src={bag} alt="bag" className="size-14" />
        <img src={book} alt="book" className="size-14" />
      </div>
      <div className="flex items-center justify-between flex-col absolute top-16 lg:top-32 right-0 h-[calc(100vh-140px)]">
        <img src={ruler} alt="rule" className="size-14" />
        <button
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <img src={question} alt="question" className="size-14" />
        </button>
        <img src={hat} alt="hat" className="size-14" />
      </div>
    </div>
  );
};

export default Week2;
