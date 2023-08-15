import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gifs from "./Components/Gifs";
import Mics from "./Components/Mics";

const App = () => {
  return (
    <div className="min-h-screen w-full relative font-cookie bg-black text-white">
      <Header />
      <Hero />
      <About />
      {/* <Gifs /> */}
      {/* <Mics /> */}
    </div>
  );
};

export default App;
