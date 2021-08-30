import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  prenom: string;

  @Prop({ required: true })
  role: string;

  @Prop()
  faculte: string;

  @Prop({ required: true,unique: true })
  email: string;

  @Prop()
  diplome: string;

  @Prop()
  mdp: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  telephone: number;
}

export const UserSchema = SchemaFactory.createForClass(User);