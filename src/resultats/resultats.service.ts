import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Resultat, ResultatDocument } from 'src/schemas/resultat.schema';
import { Template } from 'src/schemas/template.schema';
import { User } from 'src/schemas/user.schema';
import { CreateResultatDto } from './dto/create-resultat.dto';
import { UpdateResultatDto } from './dto/update-resultat.dto';

@Injectable()
export class ResultatsService {
  constructor(@InjectModel(Resultat.name) private resultatModel: Model<ResultatDocument>) {}
  create(createResultatDto: CreateResultatDto) {
    return new this.resultatModel(createResultatDto).save();
  }

  findAll() {
    return this.resultatModel.find().populate("user").populate("template");
  }

  find(template: Template,mail:User) {
    return this.resultatModel.find({ template: template,user:mail });
  }

  update(id: number, updateResultatDto: UpdateResultatDto) {
    return `This action updates a #${id} resultat`;
  }

  remove(_id: string) {
    return this.resultatModel.deleteOne({_id});
  }
}
