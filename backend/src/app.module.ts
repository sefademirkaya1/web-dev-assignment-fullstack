import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AppController } from './app.controller';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [AppController],
})
export class AppModule {}
