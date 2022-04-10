import { Injectable, NotImplementedException } from '@nestjs/common';
// @ts-ignore
import { Article } from '@prisma/client'

@Injectable()
export class ArticleService {
  async find(id: number, name: string): Promise<Article> {
    throw new NotImplementedException();
  }
  async create(email: string, name: string): Promise<Article> {
    throw new NotImplementedException();
  }
  async delete(id: number, name: string): Promise<Article> {
    throw new NotImplementedException();
  }
}
