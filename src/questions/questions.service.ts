import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) {}

  async create(createQuestionDto: CreateQuestionDto):Promise<Question> {
    return new this.questionModel(createQuestionDto).save();
  }

  async findAll() {
    return this.questionModel.find();
  }

  async findOne(_id: string) {
    return this.questionModel.findOne({_id});
  }

  async update(_id: string, updateQuestionDto: UpdateQuestionDto) {
    return this.questionModel.updateOne({_id},{$set:{...updateQuestionDto}});
  }

  async remove(_id: string) {
    return this.questionModel.deleteOne({_id});
  }
}
