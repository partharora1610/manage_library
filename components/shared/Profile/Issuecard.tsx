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

const Issuecard = (params: any) => {
  const { title, author, available, genre, id } = params;

  return (
    <Card className="w-[380px]">
      <CardHeader className="flex gap-2">
        <div className="flex gap-4">
          <Image
            src="https://www.bookshare.org/cover/UZ/UZbhITiy4AFlizkwPmOPQhop3potKl7otL335XbEfnI-SMALL.png"
            alt="Book_Image"
            width={80}
            height={200}
          />
          <CardTitle>
            <p className="h3-semibold mb-1">{"title"}</p>
            <div>
              <p className="paragraph-regular text-gray-600">{"author"}</p>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>Issued on</p>
        <p>Returned on</p>
        <p>Fine Paid: 0</p>
      </CardContent>
      {/* <CardFooter className="flex justify-between">Footer</CardFooter> */}
    </Card>
  );
};

export default Issuecard;
