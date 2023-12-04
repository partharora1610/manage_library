import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StudentCard = (params: any) => {
  const { name, username, scalerId, issueHistory } = params;

  const numebrOfBooksIssued = issueHistory.length;

  return (
    <Link href={`/profile/${username}`}>
      <Card className="flex justify-between items-end">
        <CardHeader>
          <CardTitle>
            <div className="flex gap-4 items-center">
              <p className="base-semibold">{name}</p>
              <p className="text-sm text-gray-400">{scalerId}</p>
            </div>
          </CardTitle>
          <p className="base-regular">{numebrOfBooksIssued} books issued</p>
        </CardHeader>
        <CardFooter className="">
          <Button className="">Send Reminders</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StudentCard;
