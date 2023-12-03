import mongoose, { Schema, models } from "mongoose";

export interface IUser extends mongoose.Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  scalerId?: string;
  issueHistory?: Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
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
