"use client";

import { Button } from "@/components/ui/button";
import { GiRunningShoe } from "react-icons/gi";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-red-500 text-4xl flex items-center">
        <GiRunningShoe className="mr-2" />
      </div>
      <div className="p-6 rounded-lg shadow-md w-1/3 text-center">
        <span className="font-bold block">Sneakzy</span>
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested resource</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => router.push("/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
