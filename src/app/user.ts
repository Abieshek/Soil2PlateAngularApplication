import { Address } from "./address";

export class User {

    public consumerId!: number
    public email!: string
    public password!: string
    public name!: string
    public phoneNumber!: number
    public subscribed!: boolean
    public rewardPoints!: number
    public carbonOffset!: number
    public address!: Address

}
