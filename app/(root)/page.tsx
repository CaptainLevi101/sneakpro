import React from "react";
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/product/product-list";
const page = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </div>
  );
};

export default page;
