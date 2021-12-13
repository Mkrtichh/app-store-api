import {Model} from "sequelize";

interface IPayment extends Model {
    app_uuid: string;
    amount: number;
    owner_fee: number;
    status: number
}

export {
    IPayment
}