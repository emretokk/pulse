import React from "react";
import BarGraph from "../../assets/bar-graph.svg";

function Hero() {
  return (
    <section className="flex flex-col relative pb-80 items-center bg-gradient-to-r from-light via-lime via-50 to-light">
      <div className="flex flex-col w-9/12 mt-6">
        <h1 className="text-[3rem] font-black tracking-tighter leading-[3.5rem]">
          Yes, your business can
          <br /> survive that expense.
        </h1>
        <p className="w-3/5 leading-7 mt-6">
          Do you know how much money you’ll have in two weeks? Two months? Two
          years? Business owners who use Pulse have better cash flow habits and
          a firm grasp on the pulse of their business.{" "}
          <strong>First month free.</strong>
        </p>
        <a href="#" className="flex w-64 h-20 mt-6 bg-blue shadow-lg">
          <p className="m-auto text-light font-extrabold text-xl">
            Try 30 Days Free
          </p>
        </a>
        <p className="text-xs mt-6">
          Plans start at $29.{" "}
          <a href="#" className="underline font-bold">
            See full pricing.
          </a>
        </p>
      </div>
      <img src={BarGraph} alt="bar-graph" className="absolute bottom-0" />
    </section>
  );
}

export default Hero;
