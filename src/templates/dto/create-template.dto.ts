import * as mongoose from 'mongoose';
import { Question } from 'src/schemas/question.schema';
export class CreateTemplateDto {

    libelle: string;
  
    questionc: string;
  
    categorie: string;
  
    question: Question;
}
