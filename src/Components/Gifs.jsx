import React from "react";
import Marquee from "react-fast-marquee";
import vid3 from "../assets/vid4.gif";
import cook1 from "../assets/cook1.png";

const Gifs = () => {
  return (
    <section className="py-24 w-full relative" id="gif">
      <img src={cook1} alt="" className="w-40 absolute right-0 top-11 z-10 animate-pulse" />
      <div className="container grid  items-center justify-center gap-8">
        <div className="relative">
          <img src={vid3} alt="" className="w-full lg:w-[40rem]" />
        </div>
      </div>
    </section>
  );
};

export default Gifs;
