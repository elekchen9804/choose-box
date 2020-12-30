import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CrawlerService } from './crawler/crawler.service';
import { CrawlerController } from './crawler/crawler.controller';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [TasksModule, CrawlerModule],
  controllers: [CrawlerController],
  providers: [CrawlerService],
})
export class AppModule { }
