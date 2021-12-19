import React, { Component } from "react";
import {
  faCoffee,
  faAnchor,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { StackedIconTitleSubtitleDaisy } from "../components/StackedIconTitleSubtitleDaisy";

export class Feature2Daisy extends Component {
  static propTypes = {};

  render() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Raw Denim Heirloom Man Braid
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <StackedIconTitleSubtitleDaisy />
            <StackedIconTitleSubtitleDaisy
              icon={faBirthdayCake}
              title="Title 2"
            />
            <StackedIconTitleSubtitleDaisy icon={faAnchor} title="Title 3" />
          </div>
          <button className="btn btn-primary btn-lg block mx-auto mt-16">
            Button
          </button>
        </div>
      </section>
    );
  }
}

export default Feature2Daisy;
