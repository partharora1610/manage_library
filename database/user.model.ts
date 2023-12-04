import mongoose, { Schema, models } from "mongoose";

export interface IUser extends mongoose.Document {
  clerkId: string;
  name: string;
  username: string;
  role?: "admin" | "student";
  email: string;
  password?: string;
  bio?: string;
  scalerId?: string;
  issueHistory?: Schema.Types.ObjectId[];
}

enum Role {
  ADMIN = "admin",
  STUDENT = "student",
}

const userSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: Role.STUDENT },
  password: { type: String },
  bio: { type: String },
  scalerId: { type: String },
  issueHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Issue",
    },
  ],
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
