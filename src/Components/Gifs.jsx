import React from "react";
import Marquee from "react-fast-marquee";
import vid1 from "../assets/vid1.gif";
import vid5 from "../assets/vid5.gif";
import vid2 from "../assets/vid3.gif";
import vid3 from "../assets/vid4.gif";
import vid4 from "../assets/vid5.gif";
import vid6 from "../assets/vid6.gif";

const Gifs = () => {
  return (
    <section className="py-24 w-full" id="gif">
      <div className="container grid  items-center justify-center gap-8">
        <img src={vid3} alt="" className="w-full lg:w-[40rem]" />
      </div>
    </section>
  );
};

export default Gifs;
