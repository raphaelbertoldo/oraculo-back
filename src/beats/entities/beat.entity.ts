import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BeatDocument = Beat & Document;

@Schema()
export class Beat {
  @Prop()
  title: string;

  @Prop()
  art: string;

  @Prop()
  beat: string;

  @Prop()
  description: string;

  @Prop()
  style: string;

  @Prop()
  key: string;

  @Prop()
  price: number;

  @Prop()
  bpm: number;
}

export const BeatSchema = SchemaFactory.createForClass(Beat);
