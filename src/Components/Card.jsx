const Card = () => {
  return (
    <div className="flex flex-col rounded-lg bg-stone-700 shadow-2xl">
      <figure className="relative">
        <img
          src="https://via.placeholder.com/600x300"
          alt="img"
          className=" rounded-t-2xl "
        />

        <div className="absolute top-0 right-0 flex items-center gap-2 p-5">
          <img
            src="https://via.placeholder.com/40x40"
            alt=""
            className="border border-stone-500 rounded-full"
          />
          <div className="text-stone-500">Author</div>
        </div>
      </figure>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-orange-500">Titolo</h2>
        <p>Contenuto del post</p>
      </div>
    </div>
  );
};
export default Card;