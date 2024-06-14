import { useState } from "react";
import Card from "./Card";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = () => {
  const posts = [
    {
      title: "Tramonto sul Mare",
      description:
        "Un meraviglioso tramonto sul mare, con colori vividi e riflessi sull'acqua.",
      image: "https://via.placeholder.com/600x300",
      author: "Luca Rossi",
      profileImage: "https://via.placeholder.com/40x40",
    },
    {
      title: "Montagne innevate",
      description:
        "Le vette innevate delle Alpi in una giornata di sole limpido.",
      image: "https://via.placeholder.com/600x300",
      author: "Giulia Bianchi",
      profileImage: "https://via.placeholder.com/40x40",
    },
    {
      title: "Foresta Autunnale",
      description:
        "Un sentiero che attraversa una foresta autunnale con foglie colorate.",
      image: "https://via.placeholder.com/600x300",
      author: "Marco Verdi",
      profileImage: "https://via.placeholder.com/40x40",
    },
    {
      title: "Città di Notte",
      description:
        "Lo skyline di una grande città illuminata dalle luci notturne.",
      image: "https://via.placeholder.com/600x300",
      author: "Elena Neri",
      profileImage: "https://via.placeholder.com/40x40",
    },
    {
      title: "Campo di Lavanda",
      description:
        "Un vasto campo di lavanda in fiore, con un cielo azzurro sullo sfondo.",
      image: "https://via.placeholder.com/600x300",
      author: "Roberto Russo",
      profileImage: "https://via.placeholder.com/40x40",
    },
  ];

  const [currentPost, setCurrentPost] = useState(0);

  return (
    <div className="flex items-center gap-10">
      <button>
        <FaArrowAltCircleLeft className="text-3xl text-orange-500 " />
      </button>

      <Card
        title={posts[currentPost].title}
        content={posts[currentPost].description}
        image={posts[currentPost].image}
        author={posts[currentPost].author}
        authorImg={posts[currentPost].profileImage}
      ></Card>

      <button>
        <FaArrowAltCircleRight className="text-3xl text-orange-500" />
      </button>
    </div>
  );
};

export default Carousel;
