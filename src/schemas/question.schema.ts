import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import * as mongoose  from 'mongoose';
import { Template } from './template.schema';
import { Reponse } from './reponse.schema';

export type QuestionDocument = Question & Document;
const opts = { toJSON: { virtuals: true } };
@Schema(opts)
export class Question {
  @Prop({ required: true })
  libelle: string;

  @Prop({ required: true })
  categorie: string;

  @Prop({type: [Object], required: true })
  reponse: [
    libellerep: string ,
    vf : boolean,
    type: string,
  ];

  @Prop({ required: true })
  duree: number;

}

export const QuestionSchema = SchemaFactory.createForClass(Question);