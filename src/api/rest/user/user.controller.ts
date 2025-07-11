import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Result } from '../../../shared/types/result.type';
import { UserService } from '../../../modules/user/user.service';
import { User } from '@prisma/client';
import { createBaseUserDTO } from '../../../modules/user/dto/create.base-user.dto';
import { updateBaseUserDTO } from '../../../modules/user/dto/update.base-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<Result<User>> {
    return this.userService.getUserById(id);
  }

  @Get('all-users')
  async getAllUsers(): Promise<Result<User[]>> {
    return this.userService.getAllUsers();
  }

  @Post('add')
  async createUser(@Body() userData: createBaseUserDTO): Promise<Result<User>> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: updateBaseUserDTO
  ): Promise<Result<User>> {
    return this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<Result<null>> {
    return this.userService.deleteUser(id);
  }
}