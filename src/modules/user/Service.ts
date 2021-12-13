import Model from "./Model";


class UserService {
    static async getUser(user_uuid: string): Promise<number> {
        return await Model.getUser(user_uuid);
    }

    static async getAllApps(user_uuid: string): Promise<number> {

        const apps = await Model.getAllApps(user_uuid);

        return apps.map((i: any)=> {
            const {UserApps, ...rest} = i.dataValues;
            return {installed: !!UserApps?.length, ...rest}
        });
    }

    static async getAppDetails(): Promise<number> {
        return await Model.getAppDetails();
    }

    static async getInstalledApps(user_uuid: string): Promise<number> {
        return await Model.getInstalledApps(user_uuid);
    }

    static async installApp(params: {user_uuid: string, app_uuid: string}) {
        return await Model.installApp(params);
    }

    static async uninstallApp(params: {user_uuid: string, app_uuid: string}) {
        return await Model.uninstallApp(params);
    }

    static async getApp(app_uuid: string): Promise<any> {
        return await Model.getApp(app_uuid);
    }
}

export default UserService