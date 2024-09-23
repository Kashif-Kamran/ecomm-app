interface Rating {
    rate: number
    count: number
}

class Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
    rating: Rating
    createdAt: Date

    constructor(productInfo: { id: string, title: string, price: number, description: string, category: string, imageUrl: string; rating: Rating, createdAt: Date }) {
        this.id = productInfo.id
        this.title = productInfo.title
        this.price = productInfo.price
        this.description = productInfo.description;
        this.category = productInfo.category;
        this.imageUrl = productInfo.imageUrl
        this.rating = productInfo.rating;
        this.createdAt = productInfo.createdAt
    }
}

export { Rating };
export default Product;

