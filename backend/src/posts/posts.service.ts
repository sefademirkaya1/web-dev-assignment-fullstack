import { Injectable } from '@nestjs/common'
import { PostEntity } from './entities/post.entity'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Injectable()
export class PostsService {
  private posts: PostEntity[] = [
    { id: 1, userId: 1, title: 'Post 1', body: 'Hello world' },
    { id: 2, userId: 1, title: 'Post 2' },
    { id: 3, userId: 2, title: 'Another post' }
  ]
  private nextId = 4

  findAll(): PostEntity[] { return this.posts }
  findOne(id: number): PostEntity | undefined { return this.posts.find(p=>p.id===id) }
  findByUser(userId: number): PostEntity[] { return this.posts.filter(p=>p.userId===userId) }
  create(dto: CreatePostDto): PostEntity { const p:PostEntity = { id: this.nextId++, ...dto }; this.posts.push(p); return p }
  update(id: number, dto: UpdatePostDto): PostEntity {
    const p = this.findOne(id); if(!p) throw new Error('Post not found')
    Object.assign(p, dto); return p
  }
  remove(id: number): void { this.posts = this.posts.filter(p=>p.id!==id) }
}
