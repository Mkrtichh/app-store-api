import DB from '../../../models/modelIndex';
const { Company, Apps } = DB.sequelize.models;
import { ICreateApp } from "interfaces/interfaces";

class CompanyModel {
    static createApp(props: ICreateApp): Promise<any> {
        return Apps.create(props);
    }

    static deleteApp(app_uuid: string): Promise<any> {
        return Apps.destroy({where: {app_uuid}});
    }

    static getCompanyApp(company_uuid: string, app_uuid: string): Promise<any> {
        return Apps.findOne({
            where: { company_uuid, app_uuid },
            attributes: ['company_uuid','app_uuid'],
        })
    }

    static getCompany(company_uuid: string): Promise<any> {
        return Company.findOne({
            where: { company_uuid },
            attributes: ['company_uuid'],
        });
    }
}

export default CompanyModel
