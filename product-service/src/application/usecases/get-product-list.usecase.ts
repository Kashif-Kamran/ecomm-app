import Product from "../domain/Product";
import ProductRepository from "../repositories/product.repository";

class GetProductsListUseCase {

    constructor(private readonly productRepository: ProductRepository) { }

    async execute(): Promise<Product[]> {
        const products: Product[] = await this.productRepository.findAll();
        return products;
    }
}

export default GetProductsListUseCase;


