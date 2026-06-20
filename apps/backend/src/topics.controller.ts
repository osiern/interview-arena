import { Controller, Get } from '@nestjs/common';

@Controller('topics')
export class TopicsController {
  @Get()
  getTopics() {
    return [
      {
        title: 'JavaScript',
        slug: 'javascript',
      },
      {
        title: 'TypeScript',
        slug: 'typescript',
      },
      {
        title: 'React',
        slug: 'react',
      },
    ];
  }
}
