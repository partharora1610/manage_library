import StudentCard from "@/components/shared/Cards/StudentCard";
import LocalSearch from "@/components/shared/Search";
import { getUserStudents } from "@/lib/actions/user.action";
import React from "react";

const Page = async () => {
  const students = await getUserStudents();
  console.log(students);

  if (!students) return <div>Loading...</div>;

  return (
    <div>
      <LocalSearch placeholder="search students" />

      <div className="flex flex-col gap-6">
        {students?.users?.map((student) => {
          return (
            <StudentCard
              name={student.name}
              username={student.username}
              scalerId={student.scalerId}
              issueHistory={student.issueHistory}
              _id={student._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
