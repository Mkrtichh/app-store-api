import {Model} from "sequelize";

interface ICompany extends Model {
    company_uuid: string;
    name: string;
    website: string
}

export {
    ICompany
}