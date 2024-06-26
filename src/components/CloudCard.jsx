/* eslint-disable react/prop-types */
const CloudCard = ({ title, img }) => {
  return (
    <div className="relative">
      <img src={img} alt={title} className="size-full" />
      <p className="absolute inset-x-4 text-xs lg:text-base inset-y-6 lg:inset-y-8 uppercase text-wrap text-center">
        {title}
      </p>
    </div>
  );
};

export default CloudCard;
