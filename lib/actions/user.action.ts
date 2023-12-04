import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export const getUserStudents = async () => {
  try {
    connectToDatabase();

    const users = await User.find({ role: "student" });

    console.log(users);

    return { users: users };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};
