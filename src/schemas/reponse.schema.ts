import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import * as mongoose  from 'mongoose';
import { Template } from './template.schema';

export type ReponseDocument = Reponse & Document;

@Schema()
export class Reponse {
  @Prop({ required: true })
  libelle: string;

  
}

export const ReponseSchema = SchemaFactory.createForClass(Reponse);