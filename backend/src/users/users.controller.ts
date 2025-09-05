import { Controller, Get, Post as PostMethod, Body, Patch, Param, Delete } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PostsService } from '../posts/posts.service'
import { CreatePostDto } from '../posts/dto/create-post.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly postsService: PostsService) {}

  @Get() findAll(){ return this.usersService.findAll() }
  @Get(':id') findOne(@Param('id') id: string){ return this.usersService.findOne(Number(id)) }
  @PostMethod() create(@Body() dto: CreateUserDto){ return this.usersService.create(dto) }
  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdateUserDto){ return this.usersService.update(Number(id), dto) }
  @Delete(':id') remove(@Param('id') id: string){ return this.usersService.remove(Number(id)) }

  @Get(':id/posts') posts(@Param('id') id: string){ return this.postsService.findByUser(Number(id)) }
  @PostMethod(':id/posts') addPost(@Param('id') id: string, @Body() body: Omit<CreatePostDto,'userId'>){ return this.postsService.create({ userId: Number(id), ...body }) }
}
