import Product from "../domain/Product";

export type CreateProductInputDto = Omit<Product, 'id' | 'createdAt' | 'rating'>

export type ProductDTO = Product;

export type GetProductByIdInputDto = { id: string }
