import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismatService: PrismaService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 查询所有已经初版的物品
  @Get('users/list')
  findPublishedProducts() {
    return this.prismatService.user.findMany({
      where: { password: 'password123' },
    });
  }
}
