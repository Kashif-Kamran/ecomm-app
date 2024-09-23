import Product, { Rating } from "../domain/Product";
import { CreateProductInputDto } from "../dtos/product.dtos";
import ProductMapper from "../mappers/product.maper";
import ProductRepository from "../repositories/product.repository";

class CreateProductUseCase {

    constructor(private readonly productRepository: ProductRepository) { }

    async execute(createProductInputDto: CreateProductInputDto): Promise<Product> {
        const rating: Rating = { count: 0, rate: 0 };
        const creationDate: Date = new Date();
        const productId: string = String(Date.now())
        const newProduct: Product = new Product({ id: productId, ...createProductInputDto, rating, createdAt: creationDate });
        await this.productRepository.create(newProduct);
        return ProductMapper.EntityToProductDTO(newProduct);
    }
}

export default CreateProductUseCase;