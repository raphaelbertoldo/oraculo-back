import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BeatsModule } from './beats/beats.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION), BeatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
