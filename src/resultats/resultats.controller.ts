import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultatsService } from './resultats.service';
import { CreateResultatDto } from './dto/create-resultat.dto';
import { UpdateResultatDto } from './dto/update-resultat.dto';
import { Template } from 'src/schemas/template.schema';
import { User } from 'src/schemas/user.schema';

@Controller('resultats')
export class ResultatsController {
  constructor(private readonly resultatsService: ResultatsService) {}

  @Post()
  create(@Body() createResultatDto: CreateResultatDto) {
    return this.resultatsService.create(createResultatDto);
  }

  @Get()
  findAll() {
    return this.resultatsService.findAll();
  }

  @Get(':template/:mail')
  find(@Param('template') template: Template,@Param('mail') mail: User) {
    return this.resultatsService.find(template,mail);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultatDto: UpdateResultatDto) {
    return this.resultatsService.update(+id, updateResultatDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.resultatsService.remove(_id);
  }
}
