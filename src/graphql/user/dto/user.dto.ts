import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserBaseDTO } from '../../../modules/user/dto/user-base.dto';

// this one is example to make the dto make with graphql compatible with the UserBaseDTO
@ObjectType()
export class UserDTO extends UserBaseDTO {
  @Field()
  declare id: string;

  @Field()
  declare email: string;

  @Field()
  declare password: string;

  @Field()
  declare firstName: string;

  @Field()
  declare lastName: string;

  @Field()
  declare phone: string;

  @Field()
  declare isActive: boolean;

  @Field(() => String)
  declare roleId: string;

  @Field(() => String, { nullable: true })
  declare createdAt: string;

  @Field(() => String, { nullable: true })
  declare updatedAt: string;

}


// //this one is another approach
// @ObjectType()
// export class UserDTO extends UserBaseDTO{}