import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './dto/user-type';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findAllByType(type: UserType) {
    return `This action returns all #${UserType[type]} type users`;
  }

  findOneWithState(id: number, state: boolean) {
    return `This action returns a #${id} user with ${state}`;
  }

  findAllInType(type: UserType) {
    return `This action returns all ${UserType[type]} users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
