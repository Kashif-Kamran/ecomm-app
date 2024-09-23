import Product from "../domain/Product";
interface ProductRepository {
    create(product: Product): Promise<void>;
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product | null>
}

export default ProductRepository;