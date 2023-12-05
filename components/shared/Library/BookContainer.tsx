import React from "react";
import BookCard from "./BookCard";

const BookContainer = async (params: any) => {
  const { results } = params;

  return (
    <div className="flex flex-wrap gap-8">
      {results?.data.map((book: any, index: number) => {
        return (
          <BookCard
            key={index}
            title={book.title}
            available={book.available}
            author={book.author}
            genre={book.genre}
            latestIssue={JSON.parse(JSON.stringify(book.latestIssue))}
            id={book._id}
          />
        );
      })}
    </div>
  );
};

export default BookContainer;
