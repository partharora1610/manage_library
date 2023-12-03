import mongoose, { Schema, models } from "mongoose";

export interface IIssue extends mongoose.Document {
  user: Schema.Types.ObjectId;
  issueDate: Date;
  returnDate: Date;
  returned: boolean;
  fine: number;
}

const IssueSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  issueDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  returnDate: {
    type: Date,
    default: () => new Date(+new Date() + 15 * 24 * 60 * 60 * 1000),
    required: true,
  },

  returned: {
    type: Boolean,
    default: false,
  },

  fine: {
    type: Number,
    default: 0,
  },
});

const Issue = models.Issue || mongoose.model("Issue", IssueSchema);

export default Issue;
