"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

const BookFilter = () => {
  const [filter, setFilter] = useState("all-books");

  return (
    <div className="flex gap-0 bg-gray-100 w-[200px] mb-6">
      <Button className="text-black hover:bg-gray-300 w-[100px]">
        All Books
      </Button>
      <Button className="text-black hover:bg-gray-300 w-[100px]">
        Available
      </Button>
    </div>
  );
};

export default BookFilter;
