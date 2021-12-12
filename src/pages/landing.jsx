import React from "react";
import Link from "next/link";

// components
import HeroImageOverlay from "../components/HeroImageOverlay";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";
import Pricing1 from "../components/Pricing1";
import Cta1 from "../components/Cta1";
import Footer4 from "../components/Footer4";

export default function Landing() {
  return (
    <>
      {/* <main data-theme="light" className="bg-base-100"> */}
      {/* <main data-theme="dark" className="bg-base-100"> */}
      {/* <main data-theme="garden" className="bg-base-100"> */}
      <main data-theme="si_recreacion" className="bg-base-100">
        {/* <main data-theme="bumblebee" className="bg-base-100"> */}
        <HeroImageOverlay />
        <Feature2 />
        <Pricing1 />
        <Feature3 />
        <Cta1 />
      </main>
      <Footer4 />
    </>
  );
}
