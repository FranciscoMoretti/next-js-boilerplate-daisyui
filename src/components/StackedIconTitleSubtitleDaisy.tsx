import React, { Component } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StackedIconTitleSubtitleDaisyProps {
  icon?: any;
  title?: string;
  subtitle?: string;
}

export class StackedIconTitleSubtitleDaisy extends Component<
  StackedIconTitleSubtitleDaisyProps,
  {}
> {
  render() {
    const {
      icon = faCoffee,
      title = "Lorem ipsum",
      subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error eligendi magni illum \
      veniam quaerat est labore consectetur earum molestiae",
    } = this.props;
    return (
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-primary text-primary-content mb-5 flex-shrink-0">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{subtitle}</p>
          <a className="mt-3 text-primary-content inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    );
  }
}
