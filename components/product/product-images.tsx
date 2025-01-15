"use client";
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={500}
        className="sm:h-[300]  lg:h-[500] w-full object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current == index && "border-orange-500"
            )}
            key={image}
            onClick={() => setCurrent(index)}
          >
            <Image
              src={image}
              alt="image"
              width={100}
              height={100}
              className="min-h-[100]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
