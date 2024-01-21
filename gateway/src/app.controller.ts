import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body()createUserDto:CreateUserRequest){
    return this.appService.createNewUser(createUserDto)
  }
  @Get('/analytics')
  getAnalytics(){
    return this.appService.getAnalytics()
  }
}
