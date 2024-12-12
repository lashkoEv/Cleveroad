import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, User } from 'apps/users/src/models';
import { Transaction } from 'sequelize/types';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'apps/common/src/base/base.service';

@Injectable()
export class UsersService extends BaseService<User> {
    constructor( 
        @Inject('USER_MODEL') model: Repository<User>
    ) {
        super(model);
    }

    getUserByEmail(email: string, scopes?: any[]): Promise<User> {
        return this.model
            .scope(scopes || [])
            .findOne({
                where: {
                    email
                }
            });
    }

    create(body: CreateUserDto): Promise<User> {
        return this.model.create({ ...body });
    }

    getUser(userId: number, scopes?: any[], transaction?: Transaction): Promise<User> {
        return this.model
            .scope(scopes || [])
            .findByPk(userId, { transaction });
    }
}