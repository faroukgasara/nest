import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Template } from './template.schema';

export type CategorieDocument = Categorie & Document;

@Schema()
export class Categorie {
  @Prop({ required: true ,unique: true,uppercase: true})
  libelle: string;

}

export const CategorieSchema = SchemaFactory.createForClass(Categorie);