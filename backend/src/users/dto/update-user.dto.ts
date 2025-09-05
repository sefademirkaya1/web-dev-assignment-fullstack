import { PartialType } from '@nestjs/mapped-types'
import { User } from '../entities/user.entity'
export class UpdateUserDto implements Partial<User> { name?: string; username?: string; email?: string }
