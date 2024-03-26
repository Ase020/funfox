import { useState } from "react";
import { ArrowRight, arrowLeft, options, profile } from "../assets";

const Footer = () => {
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    page > 1 ? setPage((prev) => prev - 1) : 1;
  };

  const handleNext = () => {
    page <= 4 ? setPage((prev) => prev + 1) : 1;
  };

  return (
    <footer className="w-[calc(100%-112px)] mx-auto flex items-center justify-between mt-3">
      <button type="button" className="size-10">
        <img src={profile} alt="profile" className="size-full object-cover" />
      </button>

      <div className="flex items-center gap-3 h-10">
        <button
          type="button"
          className=""
          onClick={handlePrev}
          disabled={page === 1}
        >
          <img
            src={arrowLeft}
            alt="arrow-left"
            className="size-10 object-cover"
          />
        </button>

        <select
          className="ring-2 ring-white bg-purple-primary h-full text-white px-4 rounded-xl outline-none"
          id=""
          defaultValue={1}
          value={page}
          onChange={(e) => setPage(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button
          type="button"
          className="size-10"
          onClick={handleNext}
          disabled={page === 5}
        >
          <img
            src={ArrowRight}
            alt="arrow-right"
            className="size-10 object-cover"
          />
        </button>
      </div>

      <button type="button" className="size-10" onClick={() => handleNext()}>
        <img src={options} alt="options" className="size-full object-cover" />
      </button>
    </footer>
  );
};

export default Footer;
