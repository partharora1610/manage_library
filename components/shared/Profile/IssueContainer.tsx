import React from "react";
import BookCard from "../Library/BookCard";
import Issuecard from "./Issuecard";

const IssueContainer = (params: any) => {
  const { issues } = params;
  console.log("issues", issues);
  console.log(issues.length);

  return (
    <div className="mt-16">
      <h2 className="h3-semibold mb-4">Your Issue History</h2>
      <div className="flex flex-wrap gap-8">
        {issues.map((issue: any, index: number) => {
          return (
            <Issuecard
              key={index}
              bookName={issue.book.title}
              author={issue.book.author}
              fine={issue.fine}
              issueDate={issue.issueDate}
              returnDate={issue.returnDate}
              returned={issue.returned}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IssueContainer;
