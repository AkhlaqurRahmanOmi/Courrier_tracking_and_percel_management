import { InputType, Field  } from '@nestjs/graphql';
import {OmitType} from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserDTO } from './user.dto';
import { UserBaseDTO } from '../../../modules/user/dto/user-base.dto';
import { createBaseUserDTO } from '../../../modules/user/dto/create.base-user.dto';

@InputType()
export class CreateUserInput extends OmitType(createBaseUserDTO, ['id','createdAt', 'updatedAt'] as const) {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  roleId?: string;
}