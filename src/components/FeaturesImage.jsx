import React from "react";
import Image from "next/image";

export interface FeaturesImageProps {
  image: string;
}

const FeaturesImage = (props: FeaturesImageProps) => {
  return (
    <div className="relative p-4 text-base-content">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2">
          <h4 className="text-2xl leading-8 font-extrabold tracking-tight sm:leading-9">
            Manage everything
          </h4>
          <ul className="my-10">
            {listItem({
              title: "One-look dashboard",
              description:
                "Know everything about your business in a single glance with " +
                "your new dashboard.",
            })}
            {listItem({
              title: "Orders, managed",
              description:
                "All your orders in one place so you can manage your " +
                "delivery, collection, asap and pre-orders in one place.",
            })}
            {listItem({
              title: "Email &amp; SMS Notifications",
              description:
                "Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.",
            })}
          </ul>
        </div>
        <div className="flex mt-10 relative lg:mt-0 w-1/3 m-auto flex-col">
          <Image
            className="rounded"
            alt="Vercel logo"
            src={props.image}
            width={1080 / 2}
            height={1620 / 2}
          />

          {/* <img src={props.image} alt="illustration" className="relative mx-auto shadow-lg rounded w-auto" /> */}
        </div>
      </div>
    </div>
  );
};
export default FeaturesImage;

function listItem({ title, description }) {
  return (
    <li key={title} className="mt-10">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h5 className="text-lg leading-6 font-bold">{title}</h5>
          <p className="mt-2 text-base leading-6">{description}</p>
        </div>
      </div>
    </li>
  );
}
