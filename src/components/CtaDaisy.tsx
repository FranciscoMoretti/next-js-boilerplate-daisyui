import React, { Component } from "react";

interface CtaDaisyProps {
  variant:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost"
    | "link"
    | "active"
    | "disabled";
  title?: string;
  buttonText?: string;
  buttonShape?: string;
}

export class CtaDaisy extends Component<CtaDaisyProps, {}> {
  render() {
    const {
      title = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, perferendis. \
        Dignissimos quas dolor consectetur animi.",
      variant = "primary",
      buttonText = "Button",
      buttonShape = "btn-lg",
    } = this.props;

    return (
      <div className="lg:w-2/3 flex flex-col sm:flex-row items-start mx-auto">
        <p className="flex-grow sm:pr-16 pb-5 sm:pb-0 text-2xl font-medium text-base-content">
          {title}
        </p>
        <button className={`btn btn-${variant} ${buttonShape}`}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default CtaDaisy;
