import Carousel from "./Components/Carousel";
function App() {
  return (
    <>
      <div className="container mx-auto bg-stone-900 text-stone-100 h-screen shadow-2xl flex flex-col items-center justify-center font-mono">
        <h1 className="text-orange-500 text-3xl font-bold mb-20">
          React Carousel
        </h1>

        <Carousel />
      </div>
    </>
  );
}

export default App;
