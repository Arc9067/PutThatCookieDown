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
      <div className="container grid grid-cols-1 lg:grid-cols-3 items-stretch justify-stretch gap-8">
        <img src={vid1} alt="" className="w-full"/>
        <img src={vid2} alt="" className="w-full"/>
        <img src={vid3} alt="" className="w-full"/>
        <img src={vid4} alt="" className="w-full"/>
        <img src={vid5} alt="" className="w-full"/>
        <img src={vid6} alt="" className="w-full"/>
      </div>
    </section>
  );
};

export default Gifs;
