import Card from "./Card";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = () => {
  const posts = [
    {
      title: "Tramonto sul Mare",
      description:
        "Un meraviglioso tramonto sul mare, con colori vividi e riflessi sull'acqua.",
      image: "https://via.placeholder.com/600x400",
      author: "Luca Rossi",
      profileImage: "https://via.placeholder.com/100x100",
    },
    {
      title: "Montagne innevate",
      description:
        "Le vette innevate delle Alpi in una giornata di sole limpido.",
      image: "https://via.placeholder.com/600x400",
      author: "Giulia Bianchi",
      profileImage: "https://via.placeholder.com/100x100",
    },
    {
      title: "Foresta Autunnale",
      description:
        "Un sentiero che attraversa una foresta autunnale con foglie colorate.",
      image: "https://via.placeholder.com/600x400",
      author: "Marco Verdi",
      profileImage: "https://via.placeholder.com/100x100",
    },
    {
      title: "Città di Notte",
      description:
        "Lo skyline di una grande città illuminata dalle luci notturne.",
      image: "https://via.placeholder.com/600x400",
      author: "Elena Neri",
      profileImage: "https://via.placeholder.com/100x100",
    },
    {
      title: "Campo di Lavanda",
      description:
        "Un vasto campo di lavanda in fiore, con un cielo azzurro sullo sfondo.",
      image: "https://via.placeholder.com/600x400",
      author: "Roberto Russo",
      profileImage: "https://via.placeholder.com/100x100",
    },
  ];

  return (
    <div className="flex items-center gap-10">
      <FaArrowAltCircleLeft className="text-3xl text-orange-500 " />
      <Card></Card>
      <FaArrowAltCircleRight className="text-3xl text-orange-500" />
    </div>
  );
};

export default Carousel;
