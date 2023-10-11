import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  Query,
  DefaultValuePipe,
  ValidationPipe,
  ParseBoolPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserState, UserType } from './dto/user-type';
import { User } from './entities/user.entity';
// import { ValidationPipe } from 'src/validation.pipe';
import { CustomValidationPipe } from '../validation.pipe';
import { CreateUserValidationPipe } from 'src/user.create.validation.pipe';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Post()
  // create(@Body(CustomValidationPipe) createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Post()
  create(@Body(CreateUserValidationPipe) createUserDto: CreateUserDto) {
    console.log(`name of the createUserDto is ${createUserDto.name}`);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('type', new ParseEnumPipe(UserType)) type: UserType,
    @Query(
      'state',
      new DefaultValuePipe(UserState.Active),
      new ParseEnumPipe(UserState),
    )
    state: UserState,
  ) {
    console.log(type);
    return this.usersService.findAll();
  }

  @Get()
  findAllInType(@Query('type', new ParseEnumPipe(UserType)) type: UserType) {
    return this.usersService.findAllInType(type);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get('type/:type')
  findAllByType(@Param('type', new ParseEnumPipe(UserType)) type: UserType) {
    return this.usersService.findAllByType(type);
  }

  @Get('/:id/:isValid')
  findOneWithStatus(
    @Param('id', ValidationPipe, ParseIntPipe) id: number,
    @Param('isValid', ValidationPipe, ParseBoolPipe) isValid: boolean,
  ) {
    return this.usersService.findOneWithState(id, isValid);
  }

  // @Get(':id')
  // findOne(
  //   @Param(
  //     'id',
  //     new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //   )
  //   id: number,
  // ) {
  //   return this.usersService.findOne(id);
  // }

  //@Get(':id')
  //findOne(@Param('id', ValidationPipe) id: number) {
  //  return this.usersService.findOne(id);
  //}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
