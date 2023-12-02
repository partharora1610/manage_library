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

const BookCard = (params: any) => {
  const { title, author, imageSrc, imageAlt, description, tags, id } = params;

  return (
    <Card className="max-w-[380px]">
      <CardHeader className="flex gap-2">
        <div className="flex gap-4">
          <Image
            src="https://www.bookshare.org/cover/UZ/UZbhITiy4AFlizkwPmOPQhop3potKl7otL335XbEfnI-SMALL.png"
            alt="Book_Image"
            width={80}
            height={200}
          />
          <CardTitle>
            <h2 className="h3-semibold mb-1">{title}</h2>
            <div>
              <p className="paragraph-regular text-gray-600">{author}</p>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="text-primary-200 px-10 border-2 border-white hover:border-gray-200 hover:bg-gray-100">
          Details
        </Button>

        <Button className="border-2 px-10 border-primary-500 hover:bg-primary-500  hover:text-white">
          Issue Book
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
