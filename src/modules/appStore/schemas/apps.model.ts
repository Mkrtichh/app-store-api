import {Sequelize, Model, DataTypes, ModelCtor} from "sequelize";
import {IApps} from '../interfaces';

export default (sequelize: Sequelize) => {
    const AppStore: ModelCtor<Model> = sequelize.define<IApps>('Apps', {
            app_uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            icon: {
                type: new DataTypes.STRING(256),
                allowNull: true,
            },
            brief_description: {
                type: new DataTypes.STRING(256),
                allowNull: true,
            },
            long_description: {
                type: new DataTypes.TEXT,
                allowNull: true,
            },
            price: {
                type: new DataTypes.DOUBLE,
            },
            company_uuid: {
                type: new DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "apps",
            freezeTableName: true,
            underscored: true
        });

    return AppStore
};