export default {
    OK: {
        code: 200,
    },
    CREATED: {
        code: 201,
        message: 'The resource has been created successfully!'
    },
    DELETED: {
        code: 200,
        message: 'The resource has been deleted successfully!',
    },
    BAD_REQUEST: {
        code: 400,
        message: 'Bad request',
        other:{
            syntax: 'Syntax error on request body.'
        }
    },
    UNAUTHORIZED: 401,
    FORBIDDEN: {
        code: 403,
        message: 'Forbidden',
    },
    NOT_FOUND: {
        code: 404,
        message: 'The entity doesn\'t found.',
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        message: 'Internal Server Error'
    },
}