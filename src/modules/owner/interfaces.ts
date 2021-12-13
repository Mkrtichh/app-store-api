import {Model} from "sequelize";

interface IOwner extends Model {
    owner_uuid: string;
    name: string;
    password: string | null;
}

export {
    IOwner
}