import Product from "./Product";

class Order {
    id: string;
    customerId: string;
    createdAt: Date;
    status: string;
    totalAmount: number;
    products: Product[];

    constructor({ id, customerId, createdAt, products, status, total }: { id: string, customerId: string, createdAt: Date, products: Product[], status: string, total?: number }) {
        this.id = id;
        this.customerId = customerId;
        this.createdAt = createdAt;
        this.products = products;
        this.status = status;
        if (total)
            this.totalAmount = total
        this.totalAmount = this.calculateTotal();
    }

    // 
    private calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }


}

export default Order