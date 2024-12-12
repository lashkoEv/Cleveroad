import { UserRoles } from 'apps/common/src/resources/users';
import { Table, Column, Model, Scopes, DataType, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';
import { PasswordHelper } from 'apps/common/src/utils/helpers/password.helper';

@Scopes(() => ({
    byRoles: (role: number) => ({
        where: { role }
    })
}))
@Table({
    tableName: 'users',
    timestamps: true,
    underscored: false
})
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    username: string;

    @Column({
        type: DataType.TINYINT,
        allowNull: false,
        defaultValue: UserRoles.user
    })
    role: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    salt: string;

    @BeforeCreate
    static hashPasswordBeforeCreate(model) {
        if (model.password) {
            model.salt = PasswordHelper.generateSalt();
            model.password = PasswordHelper.hash(model.password + model.salt);
        }
    }

    @BeforeUpdate
    static hashPasswordBeforeUpdate(model) {
        if (model.password && model.changed('password')) {
            model.salt = PasswordHelper.generateSalt();
            model.password = PasswordHelper.hash(model.password + model.salt);
        }
    }

}