import React from "react";
import logo from "../assets/bob.gif";
import cookie2 from "../assets/cook2.png";

const About = () => {
  return (
    <section className="py-24 w-full" id="about">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:items-stretch">
        <article className="p-4 pt-8 about bg-[#00232E] rounded-tl-xl text-center flex flex-col items-center justify-center">
          <h1 className="font-bold bord text-center rainbow-text text-5xl leading-[1.4] lg:text-7xl font-cartoonCookies lg:leading-[86.40px] tracking-wider">
            Om Nom Nom Nom
          </h1>
          <p className=" text-white text-xl font-normal leading-10">
            From getting yelled at by your mother to get your fat fingers out of
            the cookie jar to Arnold Schwarzenegger telling you to PUT THAT
            COOKIE DOWN!
            <br />
            <br />
            <br />
            It doesn’t matter how much weed you consume you just don’t want to
            stop… that’s called an addiction. The first step to recovery is
            acceptance, accept that you’re a cookie eating DORK!
          </p>
        </article>
        <img src={logo} alt="" className="object-cover" />
        <img src={cookie2} alt="" className="object-cover" />
        <img src={cookie2} alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default About;
