import React from "react";
import BookCard from "./BookCard";
import { getAllBooks } from "@/lib/actions/book.action";

const BookContainer = async (params: any) => {
  const results = await getAllBooks({});
  console.log(results);

  return (
    <div className="flex flex-wrap gap-8">
      {results?.data.map((book, index) => {
        return (
          <BookCard
            key={index}
            title={book.title}
            available={book.available}
            author={book.author}
            genre={book.genre}
            issueHistory={book.issueHistory}
            id={book._id}
          />
        );
      })}
    </div>
  );
};

export default BookContainer;
