import { useState } from "react";
import Card from "./Card";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
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

  const nextPost = () => {
    if (currentPost === posts.length - 1) {
      setCurrentPost(0);
    } else {
      setCurrentPost(currentPost + 1);
    }
  };

  const previusPost = () => {
    if (currentPost === 0) {
      setCurrentPost(posts.length - 1);
    } else {
      setCurrentPost(currentPost - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-10 w-full flex-wrap">
      <button onClick={previusPost}>
        <FaArrowAltCircleLeft className="text-3xl text-orange-500 " />
      </button>

      <Card
        title={posts[currentPost].title}
        content={posts[currentPost].description}
        image={posts[currentPost].image}
        author={posts[currentPost].author}
      ></Card>

      <button onClick={nextPost}>
        <FaArrowAltCircleRight className="text-3xl text-orange-500" />
      </button>

      <div className=" w-full justify-center flex gap-5">
        {posts.map((p, i) => (
          <button
            key={`btn-${i}`}
            className={`w-2 h-2 rounded-full ${
              currentPost === i ? "bg-orange-500" : "bg-stone-300"
            }`}
            onClick={() => setCurrentPost(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
