import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReponsesService } from './reponses.service';
import { CreateReponseDto } from './dto/create-reponse.dto';
import { UpdateReponseDto } from './dto/update-reponse.dto';

@Controller('reponses')
export class ReponsesController {
  constructor(private readonly reponsesService: ReponsesService) {}

  @Post()
  create(@Body() createReponseDto: CreateReponseDto) {
    return this.reponsesService.create(createReponseDto);
  }

  @Get()
  findAll() {
    return this.reponsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reponsesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReponseDto: UpdateReponseDto) {
    return this.reponsesService.update(+id, updateReponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reponsesService.remove(+id);
  }
}
