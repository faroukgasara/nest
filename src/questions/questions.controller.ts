import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ObjectId } from 'mongoose';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }
  

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.questionsService.findOne(_id);
  }

  @Put(':_id')
  update(@Param('_id') _id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionsService.update(_id, updateQuestionDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.questionsService.remove(_id);
  }
}
