"use server";

import { connectToDatabase } from "../mongoose";
import Book from "@/database/book.model";
import Issue from "@/database/issue.model";
import User from "@/database/user.model";

export const issueBook = async (params: any) => {
  try {
    connectToDatabase();
    const { bookId, scalerId } = params;

    const book = await Book.findOne({ _id: bookId });
    const user = await User.findOne({ scalerId: scalerId });

    console.log({ book });
    console.log({ user });

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

      console.log({ issue });
      const updatedBook = await Book.findOneAndUpdate(
        { _id: book._id },
        {
          $set: { available: false, latestIssue: issue._id },
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

export const returnBook = async (params: any) => {
  try {
    console.log(params);
    const { bookId, userId } = params;

    const user = await User.findOne({ _id: userId });

    const book = await Book.findOne({ _id: bookId }).populate({
      path: "latestIssue",
      model: Issue,
    });

    console.log({ book });
    console.log({ user });

    if (!user)
      return {
        status: false,
        message: "Invalid scalerId, no user with such Id exist in the database",
      };

    if (book) {
      if (book.available) {
        return { status: false, message: "Book already returned" };
      }

      console.log(book.latestIssue.user.toString(), user._id.toString());

      if (book.latestIssue.user.toString() !== user._id.toString()) {
        return {
          status: false,
          message: "Book is not issued to this user",
        };
      }

      const updatedBook = await Book.findOneAndUpdate(
        { _id: book._id },
        {
          $set: { available: true, lastIssue: null },
        },
        { new: true }
      );

      const updatedIssue = await Issue.findOneAndUpdate(
        { _id: book.latestIssue._id },
        {
          $set: { returned: true },
        },
        { new: true }
      );

      return { status: true, message: "Book returned successfully" };
    } else {
      return { status: false, message: "Book not found" };
    }
  } catch (error) {
    console.log(error);
  }
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
