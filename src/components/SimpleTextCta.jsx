import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  isVertical?: boolean;
  twoButton?: boolean;
  isLeft?: boolean;
}

const SimpleTextCta = (props: Props) => {
  return (
    <div className={`${props.image ? "overflow-hidden relative" : ""}`}>
      <div
        className={`${
          props.isVertical
            ? props.isLeft
              ? "text-start"
              : "text-center"
            : "lg:flex lg:items-center lg:justify-between"
        } ${
          props.image ? "w-1/2" : "w-full mx-auto"
        } py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20`}
      >
        <h2 className={`text-3xl font-extrabold sm:text-4xl text-base-content`}>
          <span className="block">{props.title}</span>
          {props.subtitle && (
            <span className="block text-primary">{props.subtitle}</span>
          )}
        </h2>
        {props.description && (
          <p
            className={`text-xl${props.isVertical ? " mt-4" : ""}${
              props.image ? "" : " max-w-md mx-auto"
            } text-base-content`}
          >
            {props.description}
          </p>
        )}
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div
            className={`${
              props.isVertical ? "mt-12" : ""
            } inline-flex rounded-md shadow`}
          >
            <button
              className="btn"
              // label="Get started"
              // isFat={true}
              // color="indigo"
            >
              "Get started"
            </button>
          </div>
          {props.twoButton && (
            <div className="ml-3 inline-flex rounded-md shadow">
              <button
                className="btn"
                // label="Invite friend"
                // isFat={true}
                // color="gray"
              >
                "Invite friend"
              </button>
            </div>
          )}
        </div>
      </div>
      {props.image && (
        <img
          src={props.image}
          className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
        />
      )}
    </div>
  );
};

export default SimpleTextCta;
