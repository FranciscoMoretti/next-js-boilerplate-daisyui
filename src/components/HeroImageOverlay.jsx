import Image from "next/image";

import React, { Component } from "react";

export default class HeroImageOverlay extends Component {
  render() {
    return (
      <section>
        <div class="hero min-h-screen bg-primary-focus">
          <Image
            class="hero-overlay opacity-80"
            alt="Mountains"
            // src="https://source.unsplash.com/MD_ha01Bk7c"
            src="https://source.unsplash.com/PFUqfNsorJM"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div class="text-center hero-content text-base-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
              <p class="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
