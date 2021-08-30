import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Template, TemplateDocument } from 'src/schemas/template.schema';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Injectable()
export class TemplatesService {
  
  constructor(@InjectModel(Template.name) private templateModel: Model<TemplateDocument>) {}
  create(createTemplateDto: CreateTemplateDto):Promise<Template> {
    return new this.templateModel(createTemplateDto).save();
  }

  async findAll() {
    return this.templateModel.find().populate("question").populate("categorie");
  }

  async findOne(_id: string) {
    return this.templateModel.findOne({_id}).populate("question").populate("categorie");
  }

  async updatepush(_id: string,updateTemplateDto: UpdateTemplateDto) {
    return this.templateModel.update({_id}, {
      $set: { question: updateTemplateDto.question },
    })
  }

  async updatepull(_id: string, idc:string,updateTemplateDto: UpdateTemplateDto) {
    return this.templateModel.updateOne({_id}, {
      $pull: { question: idc },
    })
  }

  async remove(_id: string) {
    return this.templateModel.deleteOne({_id});
  }
}
