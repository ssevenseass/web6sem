import { Injectable, NotImplementedException } from '@nestjs/common';
// @ts-ignore
import { Profile } from '@prisma/client'

@Injectable()
export class ProfileService {
  async find(id: number, name: string): Promise<Profile> {
    throw new NotImplementedException();
  }
  async create(email: string, name: string): Promise<Profile> {
    throw new NotImplementedException();
  }
  async delete(id: number, name: string): Promise<Profile> {
    throw new NotImplementedException();
  }
}
