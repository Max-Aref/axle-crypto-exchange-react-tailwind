import React from "react";

// import images
import Image3 from "../assets/img/feature-3-img.png";

const FeaturesSection3 = () => {
  return (
    <section className="py-[30px] lg:py-[120px] pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div
          className="max-w-[454px] mb-6 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">
            Grow your Portfolio and track your investments.{" "}
          </h3>
          <p className="text-gray mb-8 max-w-[408px]">
            Use advanced analytical tools. Clear trading views for live charts
            to track current and historical profit investments.
          </p>
          <button className="btn px-8">Learn More</button>
        </div>
        {/*image  */}
        <div
          className="flex-1 flex justify-end"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <img src={Image3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection3;
