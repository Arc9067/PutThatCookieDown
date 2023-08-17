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
            C is for cookie, that's good enough for me C is for cookie, that's
            good enough for me Oh, cookie, cookie, cookie starts with C, yeah!
            Cookie, cookie, cookie starts with C, oh boy! Cookie, cookie, cookie
            starts with C!"
            <br />
            <br />
            <br />
            Hey you know what? A round cookie with one bite out of it Looks like
            a C A round donut with one bite out of it Also looks like a C But it
            is not as good as a cookie Oh and the moon sometimes looks like a C
            But you can't eat that, so
          </p>
        </article>
        <img src={logo} alt="" className="object-cover" />
        <h1 className="font-bold bord text-center rainbow-text text-3xl p-10 self-center font-cartoonCookies tracking-wider">
          Sometimes me think, what is friend? And then me say: a friend is
          someone to share last cookie with.{" "}
        </h1>{" "}
        <img src={cookie2} alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default About;
