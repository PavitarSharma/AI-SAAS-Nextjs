import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./MobileSidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
