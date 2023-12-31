import mongoose, { Schema, models } from "mongoose";
import Issue from "./issue.model";

export interface IBook extends mongoose.Document {
  title: string;
  description?: string;
  author?: string;
  issueHistory: Schema.Types.ObjectId[];
  image?: string;
  genre?: string;
  available?: boolean;
  latestIssue: Schema.Types.ObjectId;
}

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  author: {
    type: String,
  },

  latestIssue: {
    type: Schema.Types.ObjectId,
    ref: Issue,
    default: null,
  },

  image: {
    type: String,
  },
  genre: {
    type: String,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Book = models.Book || mongoose.model("Book", BookSchema);

export default Book;
