import {Sequelize, Options, Dialect} from 'sequelize';
import {IDBConfig} from 'interfaces/interfaces';

const opt: IDBConfig = {
    DB: process.env.DB as string,
    USER: process.env.DB_USER as string,
    PASSWORD: process.env.DB_PASSWORD as string,
    HOST: process.env.DB_HOST as string,
    DIALECT: process.env.DB_DIALECT as Dialect,
    PORT: process.env.DB_PORT as number | undefined,
    LOGGING: (process.env.DB_LOGGING || false) as boolean
};

const config: Options = {
    host: opt.HOST,
    dialect: opt.DIALECT,
    port: opt.PORT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: opt.LOGGING
};


export default new Sequelize(opt.DB,opt.USER, opt.PASSWORD,config);