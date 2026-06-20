import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

@Module({
  imports: [],
  controllers: [AppController, TopicsController],
  providers: [AppService, TopicsService],
})
export class AppModule {}
