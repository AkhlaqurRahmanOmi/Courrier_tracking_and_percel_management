import { UserBaseDTO } from './user-base.dto';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from '../../../graphql/user/dto/user.create.dto';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class updateBaseUserDTO extends PartialType(CreateUserInput) {
  @IsString()
  @IsOptional()
  roleId?: string;

}