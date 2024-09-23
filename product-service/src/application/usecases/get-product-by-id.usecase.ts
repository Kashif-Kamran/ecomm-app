import Product from "../domain/Product";
import { GetProductByIdInputDto } from "../dtos/product.dtos";
import ProductRepository from "../repositories/product.repository";

class GetProductByIdUseCase {

    constructor(private readonly productRepository: ProductRepository) { }

    async execute(getProductDto: GetProductByIdInputDto): Promise<Product | null> {
        const product: Product | null = await this.productRepository.findById(getProductDto.id)
        return product;
    }
}

export default GetProductByIdUseCase;


