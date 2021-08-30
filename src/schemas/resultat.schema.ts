import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Categorie } from './categorie.schema';
import { Question } from './question.schema';
import { Template } from './template.schema';
import { User } from './user.schema';

export type ResultatDocument = Resultat & Document;
const opts = { toJSON: { virtuals: true } };
@Schema(opts)
export class Resultat {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name , required: true})
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Template.name , required: true})
  template: Template;


  @Prop({type: [Object], required: true})
  resultat: [
    a : string,
    b: string,
    qs:string
  ];

}

export const ResultatSchema = SchemaFactory.createForClass(Resultat);
ResultatSchema.index({ "user": 1, "template": 1}, { "unique": true });