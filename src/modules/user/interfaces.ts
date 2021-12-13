import {Model} from "sequelize";

interface IUser extends Model {
    app_uuid: string;
    amount: string;
    status: number
}

interface IUserApp extends Model {
    app_uuid: string;
    user_uuid: string;
}

export {
    IUser,
    IUserApp
}