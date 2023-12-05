import BookFilter from "@/components/shared/BookFilter";
import AdminActions from "@/components/shared/Library/AdminActions";
import BookContainer from "@/components/shared/Library/BookContainer";
import LocalSearch from "@/components/shared/Search";
import { getAllBooks } from "@/lib/actions/book.action";
import React from "react";

const Page = async () => {
  const results = await getAllBooks({});
  // console.log(results);

  return (
    <div>
      <div className="flex gap-10 items-start">
        <LocalSearch placeholder="Search books, magazines and collections" />
        <AdminActions />
      </div>
      <BookFilter />
      <BookContainer results={results} />
    </div>
  );
};

export default Page;
