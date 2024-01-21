import { Injectable } from '@nestjs/common';
import { CreateNewUser } from './create-user-event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createUser(data:CreateNewUser){
    console.log("handle communcications", data)
  }
}
