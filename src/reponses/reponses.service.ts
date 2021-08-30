import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reponse, ReponseDocument } from 'src/schemas/reponse.schema';
import { CreateReponseDto } from './dto/create-reponse.dto';
import { UpdateReponseDto } from './dto/update-reponse.dto';

@Injectable()
export class ReponsesService {
  
  constructor(@InjectModel(Reponse.name) private reponseModel: Model<ReponseDocument>) {}
  create(createReponseDto: CreateReponseDto):Promise<Reponse> {
    return new this.reponseModel(createReponseDto).save();
  }

  findAll() {
    return this.reponseModel.find().sort({_id:-1}).limit(1);
    ;
  }

  findOne(id: number) {
    return `This action returns a #${id} reponse`;
  }

  update(id: number, updateReponseDto: UpdateReponseDto) {
    return `This action updates a #${id} reponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} reponse`;
  }
}
