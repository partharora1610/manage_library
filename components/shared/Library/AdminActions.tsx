import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminActions = () => {
  return (
    <div>
      <Link href="/add-book">
        <Button className="text-base font-medium px-8 py-4 bg-primary-500 text-white flex gap-4">
          <span className="h3-semibold">+</span>
          ADD BOOK
        </Button>
      </Link>
    </div>
  );
};

export default AdminActions;
