"use client";

import React from "react";

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

const RecieveBookModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type == "recieveBook";

  const onReturnBookhandler = async () => {
    console.log("Book Returned");
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden p-0">
        <DialogHeader className="pt-8 px-6"></DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Accept [BookName]
        </DialogTitle>
        <DialogDescription className="text-center">
          The Book is issued to the scaler student with the following details:
          <p>Name [scalerId]</p>
          <p>Fine: 0</p>
        </DialogDescription>
        <DialogFooter>
          <Button onClick={onReturnBookhandler}>Recieve Book</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecieveBookModal;
