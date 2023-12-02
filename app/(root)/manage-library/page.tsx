import AdminActions from "@/components/shared/Library/AdminActions";
import BookContainer from "@/components/shared/Library/BookContainer";
import LocalSearch from "@/components/shared/Search";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-10 items-start">
        <LocalSearch placeholder="Search books, magazines and collections" />
        <AdminActions />
      </div>
      FILTERS
      <BookContainer />
    </div>
  );
};

export default page;
