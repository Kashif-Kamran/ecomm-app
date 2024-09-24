import axios, { AxiosResponse } from "axios";
import Product from "../../application/domain/Product";
import ProductServiceInteractor from "../../application/services/product-service.interactor";

class ApiClientBaseProductServiceInteractor implements ProductServiceInteractor {

    private baseUrl: string;
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/product';
    }

    async getProductsListByIds(productsIds: string[]): Promise<Product[]> {
        try
        {
            if (productsIds.length < 0) return []
            const response: AxiosResponse<{ data: Product[], message: string, success: boolean }> = await axios.post(this.baseUrl + '/ids', { productsIds });
            const products = response.data.data;
            if (response.data.success)
            {
                return products
            }
            return []
        }
        catch (error)
        {
            throw new Error('Failed to get products')
        }
    }
}


export default ApiClientBaseProductServiceInteractor;