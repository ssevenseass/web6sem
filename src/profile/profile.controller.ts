import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
// @ts-ignore
import { Profile } from '@prisma/client'
import { ProfileService } from './profile.service'


@ApiResponse({
  status: 355,
  description: 'Not implemented',
})

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}


  @ApiOperation({
    summary: 'Find profile',
  })
  @Get(':profile')
  async getUser(@Param('profile') id: number, name: string):
    Promise<Profile> {
    return await this.profileService.find(id, name);
  }
  @Post('create')
  async createUser(email: string, name: string): Promise<Profile> {
    return await this.profileService.create(email, name);
  }
  @Delete(':profile/delete')
  async deleteUser(@Param('profile') id: number, name: string): Promise<Profile> {
    return await this.profileService.delete(id, name);
  }

}
