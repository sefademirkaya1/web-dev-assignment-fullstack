import { PostEntity } from '../entities/post.entity'
export type CreatePostDto = Omit<PostEntity, 'id'>
