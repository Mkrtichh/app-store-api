process.env.TZ = 'UTC';
import * as dotenv from 'dotenv';
dotenv.config({path: __dirname + '/../.env'});
const ENV: string  = process.env.NODE_ENV || 'local';
import {Request, Response, NextFunction} from "express";
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import {Server} from '@overnightjs/core';
import MySql from "./db/MySql";
import * as Controllers from './modules/Controllers';
import DB from '../models/modelIndex';
import {APIError} from "./services/validator/Error";

const whitelist: string[] = [
    'localhost:3000/*'
];

const options: cors.CorsOptions = {
    credentials: true,
    origin: whitelist,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    preflightContinue: false
};

class Bootstrap extends Server {
    private host: string;

    constructor() {
        super(ENV === 'local'); // setting showLogs to true
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cors(options));
        this.setupControllers();
        this.host ='localhost';
    }

    private setupControllers(): void {
        const arr: any[] = [];
        for (const Controller of Object.values(Controllers)) {
            arr.push(new Controller())
        }
        super.addControllers(arr);

        this.app.use((req: Request, res: Response) => {
            res.status(404).json({
                message: '0_o Route not found'
            })
        });

        // error handler
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            return res.status(err.status || err.errno || err.code || err.httpCode || 400).json({
                message: err.message,
                params: err?.params
            })
        });
    }

    public checkMySql() {
        return MySql.authenticate()
    }

    public start(): any {
        DB.sequelize.sync({force: true}).then(() => {
            this.app.listen(this.app.get('port'), this.host,() => {
                console.log('App is running at http://localhost:%d in %s mode', this.app.get('port'), this.app.get('env'));
            });
        }).catch((err: any) => {
            throw err
        })
    }

    public async run() {
        try {
            await this.checkMySql();
            console.log('Connection has been established successfully.');
            this.start();
        } catch (e) {
            console.log('Server crashed with error', e);
            process.exit(1);
        }
    }
}

export default new Bootstrap().run();


