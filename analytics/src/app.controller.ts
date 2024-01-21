import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateNewUser } from './create-user-event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  createUser(data:CreateNewUser){
    return this.appService.createUser(data)
  }
  @MessagePattern({cmd:"get_analytics"})
  getAnalytics(){
    return this.appService.getAnalytics()
  }
}
