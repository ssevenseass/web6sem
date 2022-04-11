import { Injectable, NotImplementedException } from '@nestjs/common';
// @ts-ignore
import { Article } from '@prisma/client'

@Injectable()
export class ArticleService {
  async find(id: number, title: string): Promise<Article> {
    throw new NotImplementedException();
  }
  async create(content: string, title: string): Promise<Article> {
    throw new NotImplementedException();
  }
  async delete(id: number, title: string): Promise<Article> {
    throw new NotImplementedException();
  }
}
