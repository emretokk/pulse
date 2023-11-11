import React, { useState } from "react";

function Header() {
  const [mouseOnSignUp, setMouseOnSignUp] = useState(false);
  return (
    <header className="flex justify-between items-center h-36 px-48 bg-gradient-to-r from-light via-lime to-light">
      <a href="#">
        <img
          src="https://pulseapp.com/img/pulse-logo.svg"
          alt="Pulse Logo"
          aria-hidden="true"
          className="flex-shrink-0"
        ></img>
      </a>
      <ul className="flex items-center gap-7 px-2 text-primary font-bold text-base">
        <li>
          <a href="#" className="hover:text-dark">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-dark">
            Customer Stories
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-dark">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-dark">
            Blog
          </a>
        </li>
        <li
          className="flex border-2 border-primary bg-primary"
          onMouseEnter={() => setMouseOnSignUp(true)}
          onMouseLeave={() => setMouseOnSignUp(false)}
        >
          <a
            href="#"
            className={`${
              mouseOnSignUp
                ? "translate-x-1 -translate-y-1 bg-lime px-3 py-1 border-2 border-primary"
                : "bg-lime px-3 py-1 border-2 border-transparent"
            }`}
          >
            Sign Up
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
