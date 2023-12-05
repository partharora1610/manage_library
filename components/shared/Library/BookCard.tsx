"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModal";

const BookCard = (params: any) => {
  const { onOpen } = useModal();

  const { title, author, available, genre, id, latestIssue } = params;
  // console.log(lastestIssue);

  return (
    <Card className="w-[380px] relative">
      <CardHeader className="flex gap-2">
        <div className="flex gap-4">
          <Image
            src="https://www.bookshare.org/cover/UZ/UZbhITiy4AFlizkwPmOPQhop3potKl7otL335XbEfnI-SMALL.png"
            alt="Book_Image"
            width={80}
            height={200}
          />
          <CardTitle>
            <p className="h3-semibold mb-1">{title}</p>
            <div>
              <p className="paragraph-regular text-gray-600">{author}</p>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>Later this will be inserted</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="text-primary-200 px-10 border-2 border-white hover:border-gray-200 hover:bg-gray-100">
          Details
        </Button>

        {available ? (
          <Button
            className="border-2 px-10 border-primary-500 hover:bg-primary-500  hover:text-white"
            onClick={() => onOpen("issueBook", { bookId: id })}
          >
            Issue Book
          </Button>
        ) : (
          <Button
            className="border-2 px-10 border-primary-500 hover:bg-primary-500  hover:text-white"
            onClick={() =>
              onOpen("recieveBook", {
                bookId: id,
                bookName: title,
                latestIssue: latestIssue,
              })
            }
          >
            Recieve Book
          </Button>
        )}
        {available ? (
          <div className="absolute top-6 left-6  bg-green-700/50 text-white px-2">
            Available
          </div>
        ) : (
          <div className="absolute top-6 left-6  bg-red-700/50 text-white px-2">
            Issued
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default BookCard;
