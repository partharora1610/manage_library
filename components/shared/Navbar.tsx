import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full gap-5 p-6 py-8 shadow-light-300 sm:px-12 bg-accent-blue">
      <Link href="/" className="flex items-center gap-1">
        <Image src="" width={23} height={23} alt="sst_library_logo" />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          SST <span className="text-primary-500">Library</span>
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button className="border-primary-500 border-2 text-base font-medium px-8 py-4 hover:bg-primary-500 hover:text-white">
              LOGIN
            </Button>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
