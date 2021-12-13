import {Sequelize, Model, DataTypes, ModelCtor} from "sequelize";
import {ICompany} from '../interfaces';

export default (sequelize: Sequelize) => {
    const Company: ModelCtor<Model> = sequelize.define<ICompany>('Company', {
            company_uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            website: {
                type: new DataTypes.STRING(128),
            }
        },
        {
            tableName: "company",
            freezeTableName: true,
            underscored: true
        });

    return Company
};