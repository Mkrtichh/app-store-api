import {Controller, Get} from '@overnightjs/core';
import {Req, Res, Next} from "interfaces/interfaces";
import StatusCodes from "../../services/validator/StatusCodes";
import {PaymentService} from '../Services';


@Controller('api/owner')
export default class AppStoreController {

    @Get('total-income')
    private async getTotalPaid(req: Req, res: Res, next: Next) {
        try {
            const amount: number = await PaymentService.sumOwnerIncome();
            res.status(StatusCodes.OK.code).json({ amount, message: 'success' })
        } catch (e) {
            return next(e);
        }
    }
}
