import { z } from "zod";

export const productListSchema = z.array(
  z.object({
    id: z.int(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
  })
);

export type ProductList = z.infer<typeof productListSchema>;
