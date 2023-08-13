import React from "react";
import logo from "../assets/logo.webp";

const About = () => {
  return (
    <section className="py-24 w-full" id="about">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:items-stretch">
        <article className="p-4 pt-8 about bg-[#00232E] rounded-tl-xl text-center flex flex-col items-center justify-center">
          <h1 className="font-bold bord text-center text-orange-600 text-5xl leading-[1.4] lg:text-7xl font-cartoonCookies lg:leading-[86.40px] tracking-wider">
            About Us
          </h1>
          <p className=" text-white text-xl font-normal leading-10">
            Pepe and Toad the memecoin Launched on the ethereum. Our mission is
            to provide a fun, community-driven investment opportunity that
            celebrates the power of memes and pop culture. With a vision to
            become the leading memecoin in the market, we believe Pepe and Toad
            is the perfect addition to any investor’s portfolio. Join us on this
            journey to revolutionize the world of memecoins. the market, we
            believe Pepe and Toad is the perfect addition to any investor’s
            portfolio. Join us on this journey to revolutionize the world of
            memecoins. opportunity that celebrates the power of memes and pop
            culture. With a vision to become the leading memecoin in the market,
            we believe Pepe and Toad is the perfect addition to{" "}
          </p>
        </article>
        <img src={logo} alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default About;
