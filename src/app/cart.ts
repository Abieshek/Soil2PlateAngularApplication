import { OrderLine } from "./order-line"

export class Cart {
    public cartId!: number
    public consumerId!: number
    public orderLine!: OrderLine[]
}
