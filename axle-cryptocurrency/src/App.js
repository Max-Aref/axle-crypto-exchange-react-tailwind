import React, { useEffect } from "react";
// animation aos library
import Aos from 'aos';
import 'aos/dist/aos.css'
// components
import Hero from "./components/Hero";

const App = () => {

  useEffect(()=>{
    Aos.init({
      duration:1000,
      delay: 200,
    })
  })
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
};

export default App;
