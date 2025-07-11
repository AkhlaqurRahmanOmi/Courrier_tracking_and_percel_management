import { UserBaseDTO } from './user-base.dto';
import { IsOptional, IsString } from 'class-validator';
import { InputType } from '@nestjs/graphql';


@InputType()
export class createBaseUserDTO extends UserBaseDTO{
  @IsString()
  @IsOptional()
  roleId?: string;
}