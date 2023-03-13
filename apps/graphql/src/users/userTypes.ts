import { Field, ID, InputType, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string

  @Field()
  firstname!: string

  @Field()
  lastname!: string

  @Field({ nullable: true })
  mobile?: string

  @Field()
  email!: string

  @Field((type) => Int, { nullable: true, defaultValue: 0 })
  tokenVersion?: number
}

@InputType()
export class UserInput {
  @Field(() => ID, { nullable: true })
  id?: string

  @Field()
  email!: string

  @Field()
  password!: string

  @Field()
  firstname!: string

  @Field()
  lastname!: string

  toJSON() {
    return this
  }
}

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken!: string
  @Field(() => User)
  user!: User
}