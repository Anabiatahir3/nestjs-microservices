import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

//this is a hybrid microservice that listens to http requests and is also a microservice
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport:Transport.TCP,
    options:{
      port :3001
    }
  })


  await app.startAllMicroservices()
  await app.listen(3001);
}
bootstrap();
