import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './dto/user-type';
export declare class UsersService {
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    findAllByType(type: UserType): string;
    findOneWithState(id: number, state: boolean): string;
    findAllInType(type: UserType): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
