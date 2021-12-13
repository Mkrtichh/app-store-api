import {Controller, Post, Get} from '@overnightjs/core';
import {Req, Res, Next} from "interfaces/interfaces";
import StatusCodes from "../../services/validator/StatusCodes";
import Service from './Service';
import {PaymentService} from '../Services';
import Validator from './Validator';



@Controller('api/user')
export default class UserController {

    @Get('apps/:user_uuid')
    private async getAllApps(req: Req, res: Res, next: Next) {
        const user_uuid: string = req.params.user_uuid;

        try {
            Validator.checkUuid([user_uuid]);

            const user = await Service.getUser(user_uuid);

            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'failed' })
            }

            const apps = await Service.getAllApps(user_uuid);
            res.status(StatusCodes.OK.code).json({apps, message: 'success'})
        } catch (e) {
            return next(e);
        }
    }

    @Get('app-details/:user_uuid')
    private async getAppDetails(req: Req, res: Res, next: Next) {
        const user_uuid: string = req.params.user_uuid;
        try {
            const user = await Service.getUser(user_uuid);

            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({message: 'failed'})
            }

            const app = await Service.getAppDetails();

            res.status(StatusCodes.OK.code).json({app, message: 'success'})
        } catch (e) {
            return next(e);
        }
    }

    @Get('installed-app/:user_uuid')
    private async getInstalledApps(req: Req, res: Res, next: Next) {
        const user_uuid: string = req.params.user_uuid;
        try {
            const user = await Service.getUser(user_uuid);

            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ success: false})
            }
            const userPayment: number = await PaymentService.sumUserPayment(user_uuid);
            const app = await Service.getInstalledApps(user_uuid);

            res.status(StatusCodes.OK.code).json({app, userPayment, message: 'success'})
        } catch (e) {
            return next(e);
        }
    }

    @Post('app-install/:user_uuid/:app_uuid')
    private async installApp(req: Req, res: Res, next: Next) {
        const {user_uuid, app_uuid} = req.params;

        try {
            const user = await Service.getUser(user_uuid);
            const app = await Service.getApp(app_uuid);

            if (!user || !app) {
                return res.status(StatusCodes.UNAUTHORIZED).json({message: 'failed'})
            }

            if (app && app.price) {
              await PaymentService.createTransaction({...app, user_uuid});
            }

            await Service.installApp({user_uuid,app_uuid});

            res.status(StatusCodes.OK.code).json({message: 'success'})
        } catch (e) {
            return next(e);
        }
    }

    @Post('app-uninstall/:user_uuid/:app_uuid')
    private async uninstallApp(req: Req, res: Res, next: Next) {
        const {user_uuid, app_uuid} = req.params;

        try {
            const user = await Service.getUser(user_uuid);

            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ success: 'failed'})
            }

            await Service.uninstallApp({user_uuid,app_uuid});

            res.status(StatusCodes.OK.code).json({message: 'success'})
        } catch (e) {
            return next(e);
        }
    }
}
