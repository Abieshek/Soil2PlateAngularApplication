import { Food } from "./food"

export class Produce {
    public produceID!: number
    public name!: string
    public type!: string
    public price!: number
    public quantity!: number
    public description!: string
    public availableFrom!: Date
    public availableUntil!: Date
    public surplusStatus!: boolean
    public produceCO2!: number
    public calories!: number
    public vitamins!: number
    public allergyInformation!: string
    public imageLink!: string
    public farmerID!: number
    public foodObj!: Food

}
