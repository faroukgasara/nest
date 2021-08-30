import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Categorie } from './categorie.schema';
import { Question } from './question.schema';

export type TemplateDocument = Template & Document;
const opts = { toJSON: { virtuals: true } };
@Schema(opts)
export class Template {
  @Prop({ required: true,uppercase: true })
  libelle: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Categorie.name , required: true})
  categorie: Categorie;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: Question.name, required: true })
  question: Question;

}

export const TemplateSchema = SchemaFactory.createForClass(Template);