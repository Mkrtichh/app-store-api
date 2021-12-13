import GlobalValidator from '../../services/validator/Validator';
import {Req} from "interfaces/interfaces";
import {PUT_COMPANY_APP_FIELDS} from "./validationSchemas";

export default class Validator {

    static validateAppCreate(req: Req){
        return GlobalValidator.checkSchema(req.body, PUT_COMPANY_APP_FIELDS);
    }

    static checkUuid(uuids: string[]){
        return GlobalValidator.checkUuid(uuids);
    }
}