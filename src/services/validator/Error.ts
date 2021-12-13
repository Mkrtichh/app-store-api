import Codes from './statusCodes';

const {INTERNAL_SERVER_ERROR, BAD_REQUEST} = Codes;

class BaseError extends Error {
    name;
    httpCode;

    constructor(name: string, httpCode: number, description: string) {
        super(description);

        this.name = name;
        this.httpCode = httpCode;

        Error.captureStackTrace(this, undefined);
    }
}

class APIError extends BaseError {
    constructor(httpCode: number = INTERNAL_SERVER_ERROR.code, description: string = INTERNAL_SERVER_ERROR.message) {
        super('Api error', httpCode, description);
        Error.captureStackTrace(this, undefined);
    }
}

class ValidationError extends BaseError {
    public params: any;

    constructor(description: string, params: any) {
        super('validation', BAD_REQUEST.code, description);
        this.params = params;
    }
}

export {
    BaseError,
    APIError,
    ValidationError
}