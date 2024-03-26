import {
  bag,
  book,
  coldRainy,
  hat,
  pencil,
  question,
  ruler,
  sunnyBeach,
} from "../assets";

const Week2 = () => {
  return (
    <div className="w-[calc(100%-112px)] h-[694px] rounded-[20px] mx-auto bg-white p-5 flex flex-col items-center justify-center gap-4">
      <div className="w-full flex items-start gap-2 flex-col">
        <h4 className="text-32">
          Can you figure out the definition of setting from the following
          examples?
        </h4>

        <p className="text-2xl">(take a minute to think about this)</p>
      </div>

      <div className="flex flex-row justify-between items-start w-2/3">
        <figure className="flex flex-col justify-center items-center gap-2 max-w-72">
          <img
            src={sunnyBeach}
            alt="sunny-beach"
            className="border-2 px-8 py-3 border-dashed w-60 h-40 object-cover"
          />

          <figcaption className="text-xl text-center">
            Sunny day at a beach
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-center items-center gap-2 max-w-72">
          <img
            src={coldRainy}
            alt="cold rainy night"
            className="border-2 px-8 py-3 border-dashed w-60 h-40 object-cover"
          />

          <figcaption className="text-xl text-center">
            A cold rainy night in a haunted house in October
          </figcaption>
        </figure>
      </div>

      <div className="flex flex-col border w-full border-red-500">
        <h6 className="text-xl">
          So, what do you think the definition of setting is?
        </h6>
      </div>

      <div className="flex items-center justify-between flex-col absolute top-32 left-0 h-[calc(100vh-140px)]">
        <img src={pencil} alt="pencil" className="size-14" />
        <img src={bag} alt="bag" className="size-14" />
        <img src={book} alt="book" className="size-14" />
      </div>
      <div className="flex items-center justify-between flex-col absolute top-32 right-0 h-[calc(100vh-140px)]">
        <img src={ruler} alt="rule" className="size-14" />
        <img src={question} alt="question" className="size-14" />
        <img src={hat} alt="hat" className="size-14" />
      </div>
    </div>
  );
};

export default Week2;
