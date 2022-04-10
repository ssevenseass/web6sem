import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
// @ts-ignore
import { Article } from '@prisma/client'
import { ArticleService } from './article.service'


@ApiResponse({
  status: 355,
  description: 'Not implemented',
})

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}


  @ApiOperation({
    summary: 'Find article',
  })
  @Get(':article')
  async getArticle(@Param('article') id: number, name: string):
    Promise<Article> {
    return await this.articleService.find(id, name);
  }
  @Post('create')
  async createUser(email: string, name: string): Promise<Article> {
    return await this.articleService.create(email, name);
  }
  @Delete(':article/delete')
  async deleteUser(@Param('article') id: number, name: string): Promise<Article> {
    return await this.articleService.delete(id, name);
  }

}
