import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

// These bars are hiding the navBar need to solve for that

const Questions = [{}, {}, {}];

const Tags = [
  {
    title: "IIT DELHI",
    url: "/",
    articles: 10,
  },
  {
    title: "Scaler School of Technology",
    url: "/",
    articles: 22,
  },
  {
    title: "Mental Health",
    url: "/",
    articles: 221,
  },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col gap-16 overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[350px]">
      <div className="">
        <h3 className="h3-semibold pb-6 text-dark200_light900">
          Notifications
        </h3>
      </div>

      <div className="">
        <h3 className="h3-semibold pb-6 dark:text-primary-100">Reminders</h3>
      </div>
    </section>
  );
};

export default RightSidebar;
