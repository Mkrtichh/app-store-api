import {Model} from "sequelize";

interface IApps extends Model {
    app_uuid: string;
    name: string;
    icon: string | null;
    brief_description: string | null;
    long_description: string | null;
    price: number;
    company_uuid: string
}

interface ICreateApp {
    name: string;
    icon: string;
    brief_description: string;
    long_description: string;
    price: number;
    company_uuid: string
}


export {
    IApps,
    ICreateApp
}