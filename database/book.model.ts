import mongoose, { Schema, models } from "mongoose";

export interface IBook extends mongoose.Document {
  title: string;
  description?: string;
  author?: string;
  issueHistory: Schema.Types.ObjectId[];
  image?: string;
  genre?: string;
  available?: boolean;
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
  issueHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Issue",
    },
  ],
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
