import { ProductDTO } from "../dtos/product.dtos"
import Product from "../domain/Product"
class ProductMapper {
    static EntityToProductDTO(product: Product): ProductDTO {
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            imageUrl: product.imageUrl,
            rating: product.rating,
            createdAt: product.createdAt
        }
    }
}


export default ProductMapper;