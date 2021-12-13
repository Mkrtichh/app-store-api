import * as validateUuid from "uuid-validate";
import Codes from "./StatusCodes";
const { ValidationError } = require('./Error');
const { BAD_REQUEST } = Codes;

const FastestValidator = require('fastest-validator');

export default class Validator {
    private static validator = new FastestValidator();

    static checkSchema(param: string, schema: any) {
        const validationParams = this.validator.validate(param, schema);
        if (validationParams !== true) throw new ValidationError('Missing params', validationParams);

        return param as any;
    }

    static checkUuid(uuids: string[]) {
        for (const uuid of uuids) {
            const valid: boolean = validateUuid(uuid)
            if (!valid){
                throw new ValidationError(BAD_REQUEST.message, 'uuid');
            }
        }
        return true
    }
}