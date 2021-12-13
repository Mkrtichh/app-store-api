import GlobalValidator from '../../services/validator/Validator';

export default class Validator {
    static checkUuid(uuids: string[]){
        return GlobalValidator.checkUuid(uuids);
    }
}