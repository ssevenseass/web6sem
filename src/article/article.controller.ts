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
  async getArticle(@Param('article') id: number, title: string):
    Promise<Article> {
    return await this.articleService.find(id, title);
  }
  @Post('create')
  async createArticle(title: string, content: string): Promise<Article> {
    return await this.articleService.create(title, content);
  }
  @Delete(':article/delete')
  async deleteArticle(@Param('article') id: number, title: string): Promise<Article> {
    return await this.articleService.delete(id, title);
  }

}
