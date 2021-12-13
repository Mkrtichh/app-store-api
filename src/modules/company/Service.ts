import Model from "./Model";
import { ICreateApp } from "interfaces/interfaces";

class CompanyService {

    static async getCompany(company_uuid: string): Promise<any> {
        return await Model.getCompany(company_uuid);
    }

    static async getCompanyApp(company_uuid: string, app_uuid: string): Promise<any> {
        return await Model.getCompanyApp(company_uuid, app_uuid);
    }


    static async createApp(props: ICreateApp): Promise<any> {
        return await Model.createApp(props);
    }

    static async deleteApp(app_uuid: string): Promise<any> {
        return await Model.deleteApp(app_uuid);
    }
}

export default CompanyService