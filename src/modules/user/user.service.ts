import { Injectable, HttpStatus, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { Result } from '../../shared/types/result.type';
import { User } from '@prisma/client'; // Update this if you're no longer using Prisma
import { createBaseUserDTO } from './dto/create.base-user.dto';
import { updateBaseUserDTO } from './dto/update.base-user.dto';
import { PubsubService } from '../../shared/pubsub/pubsub.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    @Inject('PUB_SUB') private readonly pubSub: PubsubService,
  ) {}

  async getUserById(id: string): Promise<Result<User>> {
    try {
      const user = await this.userRepository.findById(id);
      if (!user) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          success: false,
          error: {
            message: `User with id ${id} not found`,
            code: 'NOT_FOUND',
          },
        };
      }

      return {
        statusCode: HttpStatus.OK,
        success: true,
        data: user,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        success: false,
        error: {
          message: 'An unexpected error occurred',
        },
      };
    }
  }

  async getAllUsers(): Promise<Result<User[]>> {
    try {
      const users = await this.userRepository.findAll();
      return {
        statusCode: HttpStatus.OK,
        success: true,
        data: users,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        success: false,
        error: {
          message: 'An unexpected error occurred',
        },
      };
    }
  }

  async createUser(data: createBaseUserDTO): Promise<Result<User>> {
    try {
      const userData = {
        email: data.email,
        password: data.password,
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        phone: data.phone || null,
        isActive: data.isActive,
        roleId: data.roleId || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const newUser = await this.userRepository.create(userData);
      await this.pubSub.publish('userCreated', newUser);

      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        data: newUser,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        error: {
          message: 'Error creating user',
        },
      };
    }
  }  async updateUser(id: string, data: updateBaseUserDTO): Promise<Result<User>> {
    try {
      // Convert string dates to Date objects if they exist
      const updateData = {
        ...data,
      };

      const user = await this.userRepository.update(id, updateData);
      await this.pubSub.publish('userUpdated', user);

      return {
        statusCode: HttpStatus.OK,
        success: true,
        data: user,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        error: {
          message: `Error updating user with id ${id}`,
        },
      };
    }
  }
  async deleteUser(id: string): Promise<Result<null>> {
    try {
      await this.userRepository.delete(id);
      await this.pubSub.publish('userDeleted', { id });
      return {
        statusCode: HttpStatus.OK,
        success: true,
        data: null,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        error: {
          message: `Error deleting user with id ${id}`,
        },
      };
    }
  }

  // Subscription methods
  subscribeToUserCreated() {
    return this.pubSub.asyncIterator('userCreated');
  }

  subscribeToUserUpdated() {
    return this.pubSub.asyncIterator('userUpdated');
  }

  subscribeToUserDeleted() {
    return this.pubSub.asyncIterator('userDeleted');
  }
}
