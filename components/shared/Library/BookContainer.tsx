import React from "react";
import BookCard from "./BookCard";

const BOOKS = [
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    imageSrc: "/images/books/the-art-of-doing-science-and-engineering.jpg",
    imageAlt: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming is one of the most influential scientists of the 20th century, whose work touched on coding, computing, and mathematics. The Art of Doing Science and Engineering is his memoir, detailing his life and work.",
    tags: ["Science", "Engineering", "Mathematics"],
    id: "1",
  },
];

const BookContainer = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {BOOKS.map((book, index) => {
        return (
          <BookCard
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            imageAlt={book.imageAlt}
            description={book.description}
            tags={book.tags}
            id={book.id}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default BookContainer;
