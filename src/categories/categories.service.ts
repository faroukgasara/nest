import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categorie, CategorieDocument } from 'src/schemas/categorie.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  
  constructor(@InjectModel(Categorie.name) private categorieModel: Model<CategorieDocument>) {}
  create(createCategoryDto: CreateCategoryDto) {
    
    return new this.categorieModel(createCategoryDto).save();
  }

  findAll() {
    return this.categorieModel.find();
  }
  

  findOne(_id: string) {
    return this.categorieModel.findOne({_id});
  }

  update(_id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categorieModel.updateOne({_id},{$set:{...updateCategoryDto}});
  }

  remove(_id: string) {
    return this.categorieModel.deleteOne({_id});
  }
}
