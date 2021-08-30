import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.categoriesService.findOne(_id);
  }

  @Put(':_id')
  update(@Param('_id') _id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(_id, updateCategoryDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.categoriesService.remove(_id);
  }
}
