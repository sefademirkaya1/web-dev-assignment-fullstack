import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get() findAll(){ return this.postsService.findAll() }
  @Get(':id') findOne(@Param('id') id: string){ return this.postsService.findOne(Number(id)) }
  @Post() create(@Body() dto: CreatePostDto){ return this.postsService.create(dto) }
  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdatePostDto){ return this.postsService.update(Number(id), dto) }
  @Delete(':id') remove(@Param('id') id: string){ return this.postsService.remove(Number(id)) }
}
