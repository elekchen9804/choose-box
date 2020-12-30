import { Controller, Get } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller('crawler')
export class CrawlerController {
    constructor(private crawlerService: CrawlerService) { }

    @Get()
    async getTasks() {
        return this.crawlerService.getData();
    }
}
