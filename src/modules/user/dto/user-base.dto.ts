// user-base.dto.ts
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, IsEmail, IsOptional, IsBoolean } from 'class-validator';

@ObjectType()
// @InputType()
export class UserBaseDTO {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phone?: string;

  @Field()
  @IsBoolean()
  isActive: boolean;

  @Field(() => String, { nullable: true })
  @IsOptional()
  createdAt?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  updatedAt?: string;
}