import Product from "../domain/Product";

interface ProductServiceInteractor {
    getProductsListByIds(productsIds: string[]): Promise<Product[]>;
}

export default ProductServiceInteractor;