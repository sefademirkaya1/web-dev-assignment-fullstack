import { Injectable } from '@nestjs/common'
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' },
  ]
  private nextId = 4

  findAll(): User[] { return this.users }
  findOne(id: number): User | undefined { return this.users.find(u=>u.id===id) }
  create(dto: CreateUserDto): User { const u:User = { id: this.nextId++, ...dto }; this.users.push(u); return u }
  update(id: number, dto: UpdateUserDto): User {
    const u = this.findOne(id); if(!u) throw new Error('User not found')
    Object.assign(u, dto); return u
  }
  remove(id: number): void { this.users = this.users.filter(u=>u.id!==id) }
}
