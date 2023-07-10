import { CallTrackerCall } from "assert"
import { Cart } from "./cart"

export class OrderLine {
    public orderLineId!: number
    public produceId!: number
    public quantitySelected!: number
    public cartObj!: Cart
}
