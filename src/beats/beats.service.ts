import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBeatDto } from './dto/create-beat.dto';
import { UpdateBeatDto } from './dto/update-beat.dto';
import { Beat, BeatDocument } from './entities/beat.entity';

@Injectable()
export class BeatsService {
  constructor(@InjectModel(Beat.name) private beat: Model<BeatDocument>) {}

  async create(beat) {
    let store = new Beat();
    store = beat;
    await this.beat.create(store);
  }

  findAll() {
    return this.beat.find();
  }

  findOne(id) {
    return this.beat.findOne(id);
  }

  async update(id, beat) {
    let store = new Beat();
    store = beat;
    await this.beat.updateOne(store);
  }

  remove(id) {
    return this.beat.deleteOne(id);
  }
}
