import {Sequelize, Model, DataTypes, ModelCtor} from "sequelize";
import {IOwner} from '../interfaces';

export default (sequelize: Sequelize) => {
    const Owner: ModelCtor<Model> = sequelize.define<IOwner>('Owner', {
            owner_uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            password: {
                type: new DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            tableName: "owner",
            freezeTableName: true,
            underscored: true
        });

    return Owner
};