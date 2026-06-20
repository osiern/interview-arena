import { Injectable } from '@nestjs/common';

@Injectable()
export class TopicsService {
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
