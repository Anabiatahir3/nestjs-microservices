import { Injectable } from '@nestjs/common';
import { CreateNewUser } from './create-user-event';

@Injectable()
export class AppService {

  private readonly analytics:any[]=[]
  getHello(): string {
    return 'Hello World!';
  }

  createUser(data:CreateNewUser){
    console.log("handle data from anayltics",data.email)
    this.analytics.push({
      email:data.email,
      timestamp:new Date()
    })
  }

  getAnalytics(){
    return this.analytics
  }
}
