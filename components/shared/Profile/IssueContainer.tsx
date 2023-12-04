import React from "react";
import BookCard from "../Library/BookCard";
import Issuecard from "./Issuecard";

const IssueContainer = () => {
  return (
    <div className="mt-16">
      <h2 className="h3-semibold mb-4">Your Issue History</h2>
      <div className="flex flex-wrap gap-8">
        <Issuecard />
        <Issuecard />
        <Issuecard />
        <Issuecard />
      </div>
    </div>
  );
};

export default IssueContainer;
