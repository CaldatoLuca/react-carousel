const Card = ({ title, content, image, author, authorImg }) => {
  return (
    <div className="flex flex-col rounded-lg bg-stone-700 shadow-2xl">
      <figure className="relative">
        <img src={image} alt="img" className=" rounded-t-2xl w-full" />

        <div className="absolute top-0 right-0 flex items-center gap-2 p-5">
          <img
            src={authorImg}
            alt=""
            className="border border-stone-500 rounded-full"
          />
          <div className="text-stone-500">{author}</div>
        </div>
      </figure>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-orange-500">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Card;
