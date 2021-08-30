import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { ObjectId } from 'mongoose';

@Controller('templates')
export class TemplatesController {
  
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  create(@Body() createTemplateDto: CreateTemplateDto) {
    return this.templatesService.create(createTemplateDto);
  }

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.templatesService.findOne(_id);
  }

  @Put('/:_id')
  updatepush(@Param('_id') _id: string, @Body() updateTemplateDto: UpdateTemplateDto) {
    return this.templatesService.updatepush(_id, updateTemplateDto);
  }

  @Delete('/:_id/:idc')
  updatepull(@Param('_id') _id: string,@Param('idc') idc: string, @Body() updateTemplateDto: UpdateTemplateDto) {
    return this.templatesService.updatepull(_id, idc,updateTemplateDto);
  }

  

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.templatesService.remove(_id);
  }
}
