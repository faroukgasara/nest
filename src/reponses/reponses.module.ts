import { Module } from '@nestjs/common';
import { ReponsesService } from './reponses.service';
import { ReponsesController } from './reponses.controller';
import { Reponse, ReponseSchema } from 'src/schemas/reponse.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [MongooseModule.forFeature([{ name: Reponse.name, schema: ReponseSchema }])],
  controllers: [ReponsesController],
  providers: [ReponsesService]
})
export class ReponsesModule {}
