import React, { useEffect, useState } from "react";
// animation aos library
import Aos from "aos";
import "aos/dist/aos.css";
// components
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/Calculate";
import Trade from "./components/Trade";
import Features from "./components/Features";

import NewsLetter from "./components/Newsletter";

const App = ({ setMobileNav }) => {
  // mobile menu state for NavMobile toggle
  const [mobileNav, setMobileNavLocal] = useState(false);

  // aos animation init
  useEffect(() => {
    // Check for prefers-reduced-motion to respect accessibility settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    Aos.init({
      duration: prefersReducedMotion ? 0 : 600, // Reduced from 1000ms to 600ms, 0ms if motion is disabled
      delay: prefersReducedMotion ? 0 : 200,
      easing: "ease-in-out",
      once: true, // Animation should happen only once
      offset: 100, // Trigger animation 100px before element is in view
    });
  }, []);

  return (
    <ErrorBoundary>
      <div className='overflow-hidden'>
        <Hero />
        {/* mobile nav menu */}
        <div
          className={`${
            mobileNav ? "right-0" : "-right-full"
          } fixed z-10 top-0 h-full transition-all ease-in-out duration-800`}
        >
          <NavMobile setMobileNav={setMobileNavLocal} />
        </div>
        <Stats />
        <Why />
        <Calculate />
        <Trade />
        <Features />
        <NewsLetter />
      </div>
    </ErrorBoundary>
  );
};

export default App;
