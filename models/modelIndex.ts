import Sequelize from 'sequelize'
import MySql from '../src/db/MySql'

import Apps from '../src/modules/appStore/schemas/apps.model';
import Company from '../src/modules/company/schemas/company.model';
import Owner from '../src/modules/owner/schemas/owner.model';
import Payment from '../src/modules/payment/schemas/payment.model';
import User from '../src/modules/user/schemas/user.model';
import UserApp from '../src/modules/user/schemas/userApp.model';

const db: any = {};

const models: any = {
    Apps,
    Owner,
    Payment,
    Company,
    User,
    UserApp
};

const assignModels = () => {
    for (const m in models) {
        db[m] = models[m](MySql,Sequelize);
    }
};

assignModels();

MySql.models.User.belongsToMany(MySql.models.Apps, {through: MySql.models.UserApp, foreignKey: 'user_uuid'});
MySql.models.Apps.belongsToMany(MySql.models.User, {through: MySql.models.UserApp, foreignKey: 'app_uuid'});
MySql.models.Apps.hasMany(MySql.models.UserApp, {foreignKey: 'app_uuid'});


MySql.models.Payment.belongsTo(MySql.models.Apps, {foreignKey: 'app_uuid'});
MySql.models.Apps.hasMany(MySql.models.Payment, {foreignKey: 'app_uuid'});

db.Sequelize = Sequelize;
db.sequelize = MySql;

export default db;