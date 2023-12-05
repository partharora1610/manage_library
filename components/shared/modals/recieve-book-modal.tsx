"use client";

import React, { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModal";
import { returnBook } from "@/lib/actions/issue.action";

const RecieveBookModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  console.log(data);
  const isModalOpen = isOpen && type == "recieveBook";

  const onReturnBookhandler = async () => {
    const res = await returnBook({
      bookId: data.bookId,
      userId: data.latestIssue?.user?._id,
    });
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden p-0">
        <DialogHeader className="pt-8 px-6"></DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Accept {data.bookName}
        </DialogTitle>
        <DialogDescription className="text-center">
          The Book is issued to the scaler student with the following details:
          <p>
            {data.latestIssue?.user?.name}: {data.latestIssue?.user?.scalerId}
          </p>
          <p>Fine: {data.latestIssue?.fine}</p>
        </DialogDescription>
        <DialogFooter>
          <Button onClick={onReturnBookhandler}>Recieve Book</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecieveBookModal;
