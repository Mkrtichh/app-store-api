import {Controller, Put, Delete, Get} from '@overnightjs/core';
import {Req, Res, Next, ICreateApp} from "interfaces/interfaces";
import StatusCodes from "../../services/validator/StatusCodes";
import Service from './Service';
import Validator from './Validator';
import {PaymentService} from "../Services";


@Controller('api/company')
export default class CompanyController {

    @Put('creat-app')
    private async createApp(req: Req, res: Res, next: Next) {
        try {
            const params: ICreateApp = Validator.validateAppCreate(req);

            const company = await Service.getCompany(params.company_uuid);

            if (!company) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ success: false})
            }

            const created: any = await Service.createApp(params);

            res.status(StatusCodes.CREATED.code).json({created, message: StatusCodes.CREATED.message})
        } catch (e) {
            return next(e);
        }
    }

    @Delete('delete-app/:company_uuid/:app_uuid')
    private async deleteApp(req: Req, res: Res, next: Next) {
        try {
            const company_uuid = req.params.company_uuid;
            const app_uuid = req.params.app_uuid;

            Validator.checkUuid([company_uuid, app_uuid]);

            const companyApp = await Service.getCompanyApp(company_uuid,app_uuid);

            if (!companyApp) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ success: false})
            }

            await Service.deleteApp(app_uuid);

            res.status(StatusCodes.DELETED.code).json({message: StatusCodes.DELETED.message})
        } catch (e) {
            return next(e);
        }
    }

    @Get('total-income/:company_uuid')
    private async getTotalPaid(req: Req, res: Res, next: Next) {
        const company_uuid = req.params.company_uuid;

        const company = await Service.getCompany(company_uuid);

        if (!company) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'failed'})
        }

        try {
            const amount: number = await PaymentService.sumCompanyIncome(company_uuid);

            res.status(StatusCodes.OK.code).json({ amount, message: 'true' })
        } catch (e) {
            return next(e);
        }
    }
}
