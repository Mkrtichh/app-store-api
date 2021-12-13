import {Sequelize, Model, DataTypes, ModelCtor} from "sequelize";
import { IUserApp } from '../interfaces';

export default (sequelize: Sequelize) => {
    const UserApp: ModelCtor<Model> = sequelize.define<IUserApp>('UserApp', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_uuid: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            app_uuid: {
                type: new DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "user_app",
            freezeTableName: true,
            underscored: true
        });

    return UserApp
};