import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gifs from "./Components/Gifs";
import Mics from "./Components/Mics";

const App = () => {
  useEffect(() => {
    let audio = document.getElementById("audio");

    document.addEventListener("click", () => {
      audio.play();
    });
  }, []);
  return (
    <div className="min-h-screen w-full relative font-cookie bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Gifs />
      {/* <Mics /> */}
    </div>
  );
};

export default App;
