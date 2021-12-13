import {Sequelize, Model, DataTypes, ModelCtor} from "sequelize";
import {IPayment} from '../interfaces';

export default (sequelize: Sequelize) => {
    const Payment: ModelCtor<Model> = sequelize.define<IPayment>('Payment', {
            app_uuid: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            user_uuid: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            amount: {
                type: new DataTypes.DOUBLE,
                allowNull: false,
            },
            company_fee: {
                type: new DataTypes.DOUBLE,
                allowNull: false,
            },
            owner_fee: {
                type: new DataTypes.DOUBLE,
                allowNull: false,
            },
            status: {
                type: new DataTypes.INTEGER,
            }
        },
        {
            tableName: "payment",
            freezeTableName: true,
            underscored: true
        });

    return Payment
};