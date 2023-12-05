import React from "react";
import BookCard from "../Library/BookCard";
import Issuecard from "./Issuecard";

const IssueContainer = (params: any) => {
  const { issues } = params;
  console.log("issues", issues);
  console.log(issues.length);

  const closedIssues = issues.filter((issue: any) => {
    return issue.returned === true;
  });

  const openIssues = issues.filter((issue: any) => {
    return issue.returned === false;
  });

  return (
    <div className="mt-16">
      <div>
        <h2 className="h3-semibold mb-4">Currenly Reading</h2>
        <div className="flex flex-wrap gap-8">
          {openIssues.map((issue: any, index: number) => {
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

      <div>
        <h2 className="h3-semibold mb-4">Past Reading History</h2>
        <div className="flex flex-wrap gap-8">
          {closedIssues.map((issue: any, index: number) => {
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
    </div>
  );
};

export default IssueContainer;
