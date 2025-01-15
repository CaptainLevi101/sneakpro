import { z } from "zod";
import { formatNumber } from "./utils";

// schema for inserting the product
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(value))),
    "Price must have exactly two decimal places (e.g., 49.99)"
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "name must be atleast 3 characters"),
  slug: z.string().min(3, "slug must be atleast 3 characters"),
  brand: z.string().min(3, "brand must be atleast 3 characters"),
  description: z
    .string()
    .min(3, "Description must have ina tleast 3 characters"),
  category: z.string().min(3, "category must be atleast 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have in atleast one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// different schema can be there for updating the product
