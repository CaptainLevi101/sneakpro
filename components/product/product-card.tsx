import { Product } from "@/types";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
        <Link href={`/product/${product.slug}`}>
          <div className="relative">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute top-2 right-2 bg-white rounded-full shadow-md p-2">
              <span className="text-xs font-semibold text-gray-700">
                ⭐ 4.5
              </span>
            </div>
          </div>
        </Link>
        <Link href={`/product/${product.slug}`}>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {product.description}
            </p>
            {product.stock > 0 ? (
              <p className="text-md font-medium text-gray-900 mt-3">
                ${product.price}
              </p>
            ) : (
              <p className="text-destructive">Out of stock</p>
            )}
          </div>
        </Link>

        <button className="mb-4 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
