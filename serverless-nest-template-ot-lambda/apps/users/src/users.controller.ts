import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    Version,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'apps/users/src/users.service';
import { Public } from 'apps/common/src/resources/common/public.decorator';
import { Roles } from 'apps/common/src/resources/common/role.decorator';
import { CreateUserDto, UserDto } from 'apps/users/src/models';
import { UserRoles } from 'apps/common/src/resources/users';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Roles(UserRoles.user)
    @ApiBearerAuth()
    @ApiResponse({ type: () => UserDto })
    @ApiOperation({ summary: 'Get current user\'s profile' })
    @Get('me')
    async getMyProfile(@Request() req): Promise<UserDto> {
        const user = await this.usersService.getUser(req.user.userId);

        return new UserDto(user);
    }

    @Version('1')
    @Public()
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Register user' })
    @Post('signup')
    async createV1(@Body() body: CreateUserDto): Promise<object> {
        const user = await this.usersService.getUserByEmail(body.email);

        if (user) {
            throw new BadRequestException({
                message: 'USER_ALREADY_EXIST',
                errorCode: 'USER_ALREADY_EXIST',
                statusCode: HttpStatus.BAD_REQUEST
            });
        }

        await this.usersService.create(body);

        return {};
    }

    @Version('2')
    @Public()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ type: () => UserDto })
    @ApiOperation({ summary: 'Register user and returns him' })
    @Post('signup')
    async createV2(@Body() body: CreateUserDto): Promise<UserDto> {
        let user = await this.usersService.getUserByEmail(body.email);

        if (!user) {
            user = await this.usersService.create(body);
        }

        return new UserDto(user);
    }
}
