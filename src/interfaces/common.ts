import {Dialect} from "sequelize";

interface IDBConfig {
    USER: string
    PASSWORD: string,
    HOST: string,
    DB: string,
    DIALECT: Dialect,
    PORT: number | undefined,
    LOGGING: boolean
}

export {
    IDBConfig
}