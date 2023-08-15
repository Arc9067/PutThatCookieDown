import React from "react";
import Marquee from "react-fast-marquee";
import vid3 from "../assets/vid4.gif";
import cook1 from "../assets/cook1.png";

const Gifs = () => {
  return (
    <section className="py-24 w-full" id="gif">
      <div className="container grid  items-center justify-center gap-8">
        <div className="relative">
          <img src={vid3} alt="" className="w-full lg:w-[40rem]" />
          <img src={cook1} alt="" className="w-40 absolute right-0 bottom-11" />
        </div>
      </div>
    </section>
  );
};

export default Gifs;
