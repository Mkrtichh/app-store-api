import {Sequelize, Model, DataTypes, ModelCtor} from "sequelize";
import {IUser} from '../interfaces';

export default (sequelize: Sequelize) => {
    const User: ModelCtor<Model> = sequelize.define<IUser>('User', {
            user_uuid: {
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
            }
        },
        {
            tableName: "user",
            freezeTableName: true,
            underscored: true
        });

    return User
};