import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserState, UserType } from './dto/user-type';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): string;
    findAll(offset: number, limit: number, type: UserType, state: UserState): string;
    findAllInType(type: UserType): string;
    findOne(id: number): string;
    findAllByType(type: UserType): string;
    findOneWithStatus(id: number, isValid: boolean): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
