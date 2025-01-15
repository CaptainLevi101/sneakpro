import ProductImages from "@/components/product/product-images";
import ProductPrice from "@/components/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import React from "react";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section className="container mx-auto my-10 px-4 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Images Column */}
          <div className="col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ProductImages images={product.images} />
            </div>
          </div>

          {/* Details Column */}
          <div className="col-span-3 lg:col-span-2 p-5 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-500">
                {product.brand} • {product.category}
              </p>
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500">
                ⭐ {product.rating} | {product.numReviews} reviews
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProductPrice
                  value={Number(product.price)}
                  className="text-2xl font-semibold text-green-700"
                />
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-700">
                Description
              </h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
          </div>

          {/* Action Column */}
          <div className="col-span-1">
            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Product Details
                  </h2>
                </div>
                <div className="mb-4 flex justify-between text-gray-600">
                  <span>Price:</span>
                  <span>
                    <ProductPrice value={Number(product.price)} />
                  </span>
                </div>
                <div className="mb-4 flex justify-between text-gray-600">
                  <span>Status:</span>
                  {product.stock > 0 ? (
                    <Badge className="bg-green-100 text-green-700">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-700">
                      Unavailable
                    </Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
