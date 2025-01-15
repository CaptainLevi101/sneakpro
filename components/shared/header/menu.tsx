import React from "react";
import ModeToggle from "../mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  EllipsisVertical,
  ShoppingCart,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-4 p-4 bg-gray-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center w-full max-w-sm justify-between gap-3">
        <ModeToggle />
        <Button
          asChild
          variant="ghost"
          className="flex items-center gap-2 hover:text-indigo-600"
        >
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          className="flex items-center gap-2 hover:text-indigo-600"
        >
          <Link href="/sign-in">
            <UserIcon className="w-5 h-5" />
            <span>Sign in</span>
          </Link>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle p-2 text-gray-600 rounded-full hover:bg-gray-200">
            <EllipsisVertical className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-6 bg-gray-100">
            <SheetTitle className="text-xl font-semibold mb-4">Menu</SheetTitle>
            <SheetDescription className="mb-4 text-sm text-gray-500">
              Navigate through the app
            </SheetDescription>
            <div className="flex flex-col gap-4 w-full">
              <ModeToggle />
              <Button
                asChild
                variant="ghost"
                className="flex items-center gap-2 w-full text-left hover:bg-gray-200 p-2 rounded-md"
              >
                <Link href="/cart">
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span>Cart</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="flex items-center gap-2 w-full text-left hover:bg-gray-200 p-2 rounded-md"
              >
                <Link href="/sign-in">
                  <UserIcon className="w-5 h-5" />
                  <span>Sign in</span>
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
