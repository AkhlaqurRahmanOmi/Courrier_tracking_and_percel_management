import { CreateUserInput } from './user.create.dto';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class updateUserInput extends PartialType(CreateUserInput){
  @Field({nullable: true})
  declare roleId: string
}