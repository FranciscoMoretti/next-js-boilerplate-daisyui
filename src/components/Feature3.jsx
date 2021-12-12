import React, { Component } from "react";

import {
  faCoffee,
  faAnchor,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Feature3 extends Component {
  static propTypes = {};

  render() {
    return (
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col justify-evenly">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Cursos y Capacitaciones
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
          </div>
          <div class="container px-5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                class="object-cover object-center h-full w-full"
                src="https://dummyimage.com/460x500"
              />
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary text-primary-content mb-5">
                  <FontAwesomeIcon icon={faAnchor} size="lg" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-primary-content inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary text-primary-content mb-5">
                  <FontAwesomeIcon icon={faBirthdayCake} size="lg" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-primary-content inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary text-primary-content mb-5">
                  <FontAwesomeIcon icon={faCoffee} size="lg" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-primary-content inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature3;
