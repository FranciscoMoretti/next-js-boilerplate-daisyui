import React from "react";

// components

import CtaDaisy from "../components/CtaDaisy";
import Feature2Daisy from "../components/Feature2Daisy";
import SectionContainer from "../components/SectionContainer";

export default function Landing() {
  return (
    <>
      {/* <main data-theme="dark" className="bg-base-100"> */}
      {/* <main data-theme="garden" className="bg-base-100"> */}
      <main data-theme="si_recreacion" className="bg-base-100">
        {/* <main data-theme="bumblebee" className="bg-base-100"> */}
        <SectionContainer>
          <Feature2Daisy />
        </SectionContainer>
        <SectionContainer>
          <CtaDaisy variant="primary" />
        </SectionContainer>
        <SectionContainer>
          <CtaDaisy variant="info" buttonShape="btn-md" />
        </SectionContainer>
        <SectionContainer>
          <CtaDaisy variant="neutral" buttonShape="btn-sm" />
        </SectionContainer>
      </main>
    </>
  );
}
