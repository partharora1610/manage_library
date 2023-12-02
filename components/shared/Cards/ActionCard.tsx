import Link from "next/link";
import React from "react";

const ActionCard = (params: any) => {
  // will edit the card later...
  const { title, path, description } = params;
  return (
    <div
      className="mb-8 border-black/10 border-2 px-6 py-4 rounded-xl bg-primary-300 w-[340px]"
      key={"index"}
    >
      <div className="flex flex-col items-start justify-center space-y-2">
        <h4 className="h3-semibold mb-2 text-primary-200">{title}</h4>
        <p className="base-regular text-gray-500">{description}</p>
      </div>

      <div className="flex items-center justify-end">
        <Link href={path}>View Details</Link>
      </div>
    </div>
  );
};

export default ActionCard;
