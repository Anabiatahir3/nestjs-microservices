import { Injectable,Inject } from '@nestjs/common';
import { CreateUserRequest } from './create-user-request.dto';
import {ClientProxy} from "@nestjs/microservices"
import { CreateNewUser } from './create-user-event';

@Injectable()
export class AppService {

  
  private readonly users:any[]=[]
  constructor(@Inject("COMMUNICATION")private readonly communicationClient:ClientProxy,
  @Inject("ANALYTICS")private readonly analyticsClient:ClientProxy){}
  getHello(): string {
    return 'Hello World!';
  }

   createNewUser(createUserDto:CreateUserRequest){
    this.users.push(createUserDto)
    this.communicationClient.emit('user_created',new CreateNewUser(createUserDto.email))
    this.analyticsClient.emit('user_created', new CreateNewUser(createUserDto.email))
   
     return this.users
   
    

  }
  getAnalytics(){
    return this.analyticsClient.send({cmd:'get_analytics'},{})
  }
}
