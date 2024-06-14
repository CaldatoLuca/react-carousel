const Card = ({ title, content, image, author, authorImg }) => {
  return (
    <div className="flex flex-col  bg-stone-700  w-2/5 rounded-2xl">
      <figure className="relative ">
        <img
          src={image}
          alt={`img-${title}`}
          className="w-full opacity-60 rounded-2xl"
        />

        <div className="absolute top-0 right-0 flex items-center gap-2 p-5">
          <div className=" w-10 h-10  rounded-full bg-orange-500 flex justify-center items-center">
            U
          </div>
          <div className="text-stone-200">{author}</div>
        </div>
      </figure>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-orange-500">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Card;
