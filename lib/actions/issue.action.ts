"use server";

import { connectToDatabase } from "../mongoose";
import Book from "@/database/book.model";
import Issue from "@/database/issue.model";
import User from "@/database/user.model";

export const issueBook = async (params: any) => {
  try {
    await connectToDatabase();

    const { bookId, userId } = params;

    const book = await Book.findOne({ _id: bookId });
    const user = await User.findOne({ scalerId: userId });

    if (!user)
      return {
        status: false,
        message: "Invalid scalerId, no user with such Id exist in the database",
      };

    if (book) {
      if (!book.available) {
        return { status: false, message: "Book not found" };
      }

      const issue = await Issue.create({
        book: book._id,
        user: user._id,
      });

      const updatedBook = await Book.findOneAndUpdate(
        { _id: book._id },
        {
          $push: { issueHistory: issue._id },
          $set: { available: false },
        },
        { new: true }
      );

      return { status: true, message: "Book issued successfully" };
    } else {
      return { status: false, message: "Book not found" };
    }
  } catch (error) {
    console.log(error);
  }
};

const returnBook = async (params: any) => {
  try {
    await connectToDatabase();

    const { bookId, userId } = params;

    const book = await Book.findOne({ _id: params.bookId });

    if (book) {
      const issue = await Issue.create({
        bookId: params.bookId,
        userId: params.userId,
      });

      const updatedBook = await Book.findOneAndUpdate(
        { _id: book._id },
        {
          $set: { available: false },
        },
        { new: true }
      );
      return { status: true, message: "Book issued successfully" };
    } else {
      return { status: false, message: "Book not found" };
    }
  } catch (error) {}
};

export const getIssues = async (params: any) => {
  try {
    connectToDatabase();

    const { userId } = params;

    const issues = await Issue.find({
      user: userId,
    }).populate({ path: "book", model: Book });

    console.log(issues);

    return { data: issues };
  } catch (error) {
    console.log(error);
  }
};
