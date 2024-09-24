import Order from "../domain/Order"
export type CreateNewOrderDTO = {
    customerId: string,
    productsIds: string[], // product ids
}