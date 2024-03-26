import {
  bag,
  book,
  child,
  cloud1,
  cloud2,
  cloud3,
  cloud4,
  cloud5,
  greenBook,
  hat,
  pencil,
  pulp,
  ruler,
  weekTag,
} from "../assets";
import { CloudCard } from "../components";

const cloudData = [
  {
    id: 1,
    title: "setting",
    img: cloud1,
  },
  {
    id: 2,
    title: "characters",
    img: cloud2,
  },
  {
    id: 3,
    title: "plot",
    img: cloud3,
  },
  {
    id: 4,
    title: "problem or conflict",
    img: cloud4,
  },
  {
    id: 5,
    title: "resolution",
    img: cloud5,
  },
];

const Week1 = () => {
  return (
    <div className="w-[calc(100%-112px)] h-[694px] rounded-[20px] mx-auto bg-white p-5 flex flex-col items-center justify-center gap-2.5">
      {/* Week tag */}
      <div className="absolute top-2 left-32">
        <img src={weekTag} alt="week-tag" className="" />
      </div>

      <h3 className="text-center bg-pink-dark text-white text-32 leading-9 py-2 px-4 rounded-3xl border-4 border-pink-primary border-dashed shadow-xl">
        Elements of Story Writing
      </h3>

      <p className="w-full text-2xl">
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey? Over the next week, we will be practicing the different
        elements of story writing. Our aim is to make stories more interesting
        and exciting.
      </p>

      <div className="bg-green-2 border-4 border-dashed border-green-1 h-28 flex items-center text-white p-3">
        <p className="text-2xl">
          There are elements which make the foundation for story writing. An
          element is an essential part of something and every fiction story has
          the same key elements:
        </p>

        <img src={child} alt="child" className="object-contain mt-3" />
      </div>

      <div className="w-full flex items-center justify-between mt-2">
        {cloudData.map(({ id, title, img }) => (
          <CloudCard key={id} title={title} img={img} />
        ))}
      </div>

      <p className="text-2xl">
        You must be familiar with some of these. If not, do not worry! we will
        cover all these elements as we go along.
      </p>

      <div className="h-32 relative">
        <img src={pulp} alt="pulp" className="" />
        <p className="absolute inset-x-16 inset-y-2 text-2xl">
          For today’s lesson, we will try to understand and practice writing the
          setting for our stories.
          <br /> The setting is an important element of every fiction story.
        </p>
      </div>

      <div className="flex items-center justify-between flex-col absolute top-32 left-0 h-[calc(100vh-140px)]">
        <img src={pencil} alt="pencil" className="size-14" />
        <img src={bag} alt="bag" className="size-14" />
        <img src={book} alt="book" className="size-14" />
      </div>
      <div className="flex items-center justify-between flex-col absolute top-32 right-0 h-[calc(100vh-140px)]">
        <img src={ruler} alt="rule" className="size-14" />
        <img src={greenBook} alt="green-book" className="size-14" />
        <img src={hat} alt="hat" className="size-14" />
      </div>
    </div>
  );
};

export default Week1;
