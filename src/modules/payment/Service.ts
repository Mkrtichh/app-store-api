import Model from './Model';
import Utils from '../../services/Utils';
const ownerPercent = 40;

enum PaymentStatuses {
    pending,
    paid
}

class PaymentService {
    static async sumOwnerIncome(): Promise<number> {
        return await Model.sumOwnerIncome();
    }

    static async sumCompanyIncome(company_uuid: string): Promise<number> {
        return await Model.sumCompanyIncome(company_uuid);
    }

    static async createTransaction(params: any): Promise<any> {
        const {owner_fee, company_fee} = Utils.calcPercent(params.price, ownerPercent);

        const dataToInsert = {
            status: PaymentStatuses.paid,
            owner_fee,
            company_fee,
            amount: params.price,
            app_uuid: params.app_uuid,
            user_uuid: params.user_uuid,
        };

        return await Model.createTransaction(dataToInsert);
    }

    static async sumUserPayment(user_uuid: any): Promise<any> {
        return await Model.sumUserPayment(user_uuid);
    }
}

export default PaymentService