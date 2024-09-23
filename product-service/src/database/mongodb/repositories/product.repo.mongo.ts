import ProductRepository from "../../../application/repositories/product.repository";
import Product from "../../../application/domain/Product";
import ProductModel, { ProductDocument } from "../models/product.model.mongo";

const mongoDocToEntityMapper = (productDocument: ProductDocument) => {
    return {
        id: productDocument.id,
        title: productDocument.title,
        price: productDocument.price,
        description: productDocument.description,
        category: productDocument.category,
        imageUrl: productDocument.imageUrl,
        rating: {
            rate: productDocument.rating.rate,
            count: productDocument.rating.count
        },
        createdAt: productDocument.createdAt
    }
}

class MongoProductRepository implements ProductRepository {
    async create(product: Product): Promise<void> {
        await ProductModel.create({ ...product })
    }
    async findAll(): Promise<Product[]> {
        const productsDocuments: ProductDocument[] = await ProductModel.find();
        return productsDocuments.map(mongoDocToEntityMapper)

    }
    async findById(productId: string): Promise<Product | null> {
        const productDocument: ProductDocument | null = await ProductModel.findOne({ id: productId });
        if (!productDocument) return null;
        return mongoDocToEntityMapper(productDocument)
    }
}




export default MongoProductRepository;