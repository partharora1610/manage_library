"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Book from "@/database/book.model";
import Issue from "@/database/issue.model";
import User from "@/database/user.model";

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

    const books = await Book.find({});

    console.log(books);
    return { data: books };
  } catch (error) {
    console.log(error);
  }
};
