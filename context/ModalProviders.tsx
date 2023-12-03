"use client";
import IssueBookModal from "@/components/shared/modals/issue-book-modal";
import RecieveBookModal from "@/components/shared/modals/recieve-book-modal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <IssueBookModal />
      <RecieveBookModal />
    </>
  );
};

export default ModalProvider;
