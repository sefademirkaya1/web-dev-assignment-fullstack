import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.enableCors({ origin: true })
  await app.listen(3000)
  console.log('Backend listening on http://localhost:3000')
}
bootstrap()
