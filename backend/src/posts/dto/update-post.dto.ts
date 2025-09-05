import { PostEntity } from '../entities/post.entity'
export class UpdatePostDto implements Partial<PostEntity> { userId?: number; title?: string; body?: string }
