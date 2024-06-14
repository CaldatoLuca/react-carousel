import { useState } from "react";
import Card from "./Card";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {
  TbPlayerSkipBackFilled,
  TbPlayerRecordFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import city from "../assets/city.jpeg";
import field from "../assets/field.jpeg";
import forest from "../assets/forest.jpg";
import mountain from "../assets/mountain.jpeg";
import sunset from "../assets/sunset.jpeg";

const Carousel = () => {
  const posts = [
    {
      title: "Tramonto sul Mare",
      description:
        "Un meraviglioso tramonto sul mare, con colori vividi e riflessi sull'acqua.",
      image: sunset,
      author: "Luca Rossi",
    },
    {
      title: "Montagne innevate",
      description:
        "Le vette innevate delle Alpi in una giornata di sole limpido.",
      image: mountain,
      author: "Giulia Bianchi",
    },
    {
      title: "Foresta Autunnale",
      description:
        "Un sentiero che attraversa una foresta autunnale con foglie colorate.",
      image: forest,
      author: "Marco Verdi",
      profileImage: "https://via.placeholder.com/40x40",
    },
    {
      title: "Città di Notte",
      description:
        "Lo skyline di una grande città illuminata dalle luci notturne.",
      image: city,
      author: "Elena Neri",
      profileImage: "https://via.placeholder.com/40x40",
    },
    {
      title: "Campo di Lavanda",
      description:
        "Un vasto campo di lavanda in fiore, con un cielo azzurro sullo sfondo.",
      image: field,
      author: "Roberto Russo",
      profileImage: "https://via.placeholder.com/40x40",
    },
  ];

  const [currentPost, setCurrentPost] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [activePlay, setActivePlay] = useState(null);

  const nextPost = () => {
    setCurrentPost((prevPost) =>
      prevPost === posts.length - 1 ? 0 : prevPost + 1
    );
  };

  const previousPost = () => {
    setCurrentPost((prevPost) =>
      prevPost === 0 ? posts.length - 1 : prevPost - 1
    );
  };

  const startAutoNext = () => {
    stopAuto();
    const id = setInterval(nextPost, 1000);
    setIntervalId(id);
    setActivePlay(3);
  };

  const startAutoPrev = () => {
    stopAuto();
    const id = setInterval(previousPost, 1000);
    setIntervalId(id);
    setActivePlay(1);
  };

  const stopAuto = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setActivePlay(2);
    }
  };

  return (
    <div className="flex items-center justify-center gap-10 w-full flex-wrap">
      <div className="w-full justify-center flex gap-5 text-lg">
        <button
          onClick={startAutoPrev}
          className={activePlay === 1 ? "text-orange-500" : "text-stone-300"}
        >
          <TbPlayerSkipBackFilled />
        </button>
        <button
          onClick={stopAuto}
          className={activePlay === 2 ? "text-orange-500" : "text-stone-300"}
        >
          <TbPlayerRecordFilled />
        </button>
        <button
          onClick={startAutoNext}
          className={activePlay === 3 ? "text-orange-500" : "text-stone-300"}
        >
          <TbPlayerSkipForwardFilled />
        </button>
      </div>

      <button onClick={previousPost}>
        <FaArrowAltCircleLeft className="text-3xl text-orange-500 " />
      </button>

      <Card
        title={posts[currentPost].title}
        content={posts[currentPost].description}
        image={posts[currentPost].image}
        author={posts[currentPost].author}
      />

      <button onClick={nextPost}>
        <FaArrowAltCircleRight className="text-3xl text-orange-500" />
      </button>

      <div className="w-full justify-center flex gap-5">
        {posts.map((p, i) => (
          <button
            key={`btn-${i}`}
            className={`w-2 h-2 rounded-full ${
              currentPost === i ? "bg-orange-500" : "bg-stone-300"
            }`}
            onClick={() => setCurrentPost(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
