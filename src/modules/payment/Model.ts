import DB from '../../../models/modelIndex';
const { Payment, Apps } = DB.sequelize.models;

class PaymentModel {
    static sumOwnerIncome(): Promise<any> {
        return Payment.sum('owner_fee');
    }
    static sumCompanyIncome(company_uuid: string): Promise<any> {
        return Payment.sum('company_fee',{
            include: {
                model: Apps,
                where: {
                    company_uuid
                },
                attributes: []
            },
        });
    }

    static createTransaction(params: any): Promise<any> {
        return Payment.create(params);
    }

    static sumUserPayment(user_uuid: string): Promise<any> {
        return Payment.sum('amount', {
            where: {
                user_uuid
            }
        });
    }
}

export default PaymentModel
