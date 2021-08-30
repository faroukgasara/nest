import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Categorie, CategorieSchema } from 'src/schemas/categorie.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [MongooseModule.forFeature([{ name: Categorie.name, schema: CategorieSchema }])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
