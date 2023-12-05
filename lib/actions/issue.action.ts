"use server";

import { connectToDatabase } from "../mongoose";
import Book from "@/database/book.model";
import Issue from "@/database/issue.model";
import User from "@/database/user.model";

export const issueBook = async (params: any) => {
  try {
    await connectToDatabase();

    // here the userId is the ScalerId
    // bookId is the ID of the book to be issued which is passed via the modal
    const { bookId, scalerId } = params;
    // console.log(bookId, scalerId);

    const book = await Book.findOne({ _id: bookId });
    const user = await User.findOne({ scalerId: scalerId });

    // console.log(book, user);

    if (!user)
      return {
        status: false,
        message: "Invalid scalerId, no user with such Id exist in the database",
      };

    if (book) {
      if (!book.available) {
        return { status: false, message: "Book not avaiable for issue rn" };
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

      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        {
          $push: { issueHistory: issue._id },
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

    console.log(bookId, userId);

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
