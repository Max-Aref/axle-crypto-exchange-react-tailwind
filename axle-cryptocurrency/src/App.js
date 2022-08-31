import React, { useEffect, useState } from "react";
// animation aos library
import Aos from "aos";
import "aos/dist/aos.css";
// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";

const App = () => {
  // mobile meuu state
  const [mobileNav, setMobileNav] = useState(false);

  // aos animation init
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    });
  });
  return (
    <div className="overflow-hidden">
      <Header setMobileNav={setMobileNav} />
      <Hero />
      {/* mobile nav menu */}
      <div
        className={`${
          mobileNav ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all ease-in-out duration-800`}
      >
        <NavMobile setMobileNav={setMobileNav} />
      </div>
      <Stats />
    </div>
  );
};

export default App;
