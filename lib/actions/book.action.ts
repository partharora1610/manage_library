"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Book from "@/database/book.model";
// import Issue from "@/database/issue.model";

export const createBook = async (params: any) => {
  try {
    connectToDatabase();

    const { title, author, image, genre } = params;

    const book = await Book.create({
      title: title,
      author: author,
      image: image,
      genre: genre,
    });

    revalidatePath("/manage-library");
    return { book };
  } catch (error) {
    console.log(error);
  }
};

export const getAllBooks = async (params: any) => {
  try {
    connectToDatabase();

    // This is giving the error I am not able populate the issueHistory array with Issue model
    // const books = await Book.find({}).populate({
    //   path: "issueHistory",
    //   model: "Issue", // Make sure to specify the model for population
    // });

    const books = await Book.find({});

    console.log(books);

    return { data: books };
  } catch (error) {
    console.log("error in getAllBooks");
    console.log(error);
  }
};

export const getBookById = async (params: any) => {
  try {
    connectToDatabase();

    const book = await Book.findById(params.id);

    console.log(book);

    return { data: book };
  } catch (error) {
    console.log(error);
  }
};
