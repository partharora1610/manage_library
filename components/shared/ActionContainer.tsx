import React from "react";
import ActionCard from "./Cards/ActionCard";

const ACTION_CARD_DATA = [
  {
    title: "Manage Library",
    description: "Add, Edit, Delete Books",
    buttonText: "Create a new project",
    buttonLink: "/manage-library",
  },
  {
    title: "Manage Students",
    description: "Issue a book to a student",
    buttonText: "Create a new project",
    buttonLink: "/students",
    imageSrc: "/images/undraw/undraw_new_project.svg",
    imageAlt: "Create a new project",
  },
  {
    title: "Accept a Book",
    description:
      "Accept a book from a student and sometimes charge them a fine 😛",
    buttonText: "Create a new project",
    buttonLink: "/projects/new",
    imageSrc: "/images/undraw/undraw_new_project.svg",
    imageAlt: "Create a new project",
  },
];

const ActionContainer = () => {
  return (
    <div className="">
      <h3 className="h2-semibold mb-6">At Glance</h3>

      <div className="flex gap-10">
        {ACTION_CARD_DATA.map((card, index) => {
          return (
            <ActionCard
              key={index}
              title={card.title}
              path={card.buttonLink}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActionContainer;
