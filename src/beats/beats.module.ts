import { Module } from '@nestjs/common';
import { BeatsService } from './beats.service';
import { BeatsController } from './beats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Beat, BeatSchema } from './entities/beat.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Beat.name, schema: BeatSchema }]),
  ],
  controllers: [BeatsController],
  providers: [BeatsService],
})
export class BeatsModule {}
