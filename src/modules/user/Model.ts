import DB from "../../../models/modelIndex";

const {User, UserApp, Apps} = DB.sequelize.models;

const appAttributes: string[] = ['icon', 'name', 'brief_description'];
const appAllAttributes: string[] = ['icon', 'name', 'brief_description','long_description', 'price'];

class UserModel {
    static getUser(user_uuid: string): Promise<any> {
        return User.findOne({
            where: { user_uuid },
            attributes: ['user_uuid'],
        });
    }

    static getAllApps(user_uuid: string): Promise<any> {
        const include = [
            {
                model: UserApp,
                attributes: ['user_uuid'],
                where: {user_uuid},
                required: false,
                raw: true
            }
        ];

        return Apps.findAll({
            include,
            attributes: appAttributes,
        });
    }

    static getAppDetails(): Promise<any> {
        return Apps.findOne({
            attributes: appAllAttributes,
        });
    }

    static getInstalledApps(user_uuid: string): Promise<any> {
        const include = [
            {
                model: Apps,
                attributes: appAttributes,
                raw: true
            }
        ];

        return UserApp.findAll({
            where: {user_uuid},
            include,
            attributes: ['user_uuid'],
        });
    }

    static installApp(params: {user_uuid: string, app_uuid: string}): Promise<any> {
        return UserApp.create(params);
    }

    static uninstallApp(params: {user_uuid: string, app_uuid: string}): Promise<any> {
        return UserApp.destroy({where: params});
    }

    static getApp(app_uuid: string): Promise<any> {
        return Apps.findOne({
            where: { app_uuid },
            attributes: ['app_uuid', 'price'],
            raw: true
        });
    }
}

export default UserModel
