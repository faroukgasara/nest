import { Module } from '@nestjs/common';
import { ResultatsService } from './resultats.service';
import { ResultatsController } from './resultats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Resultat, ResultatSchema } from 'src/schemas/resultat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Resultat.name, schema: ResultatSchema }])],
  controllers: [ResultatsController],
  providers: [ResultatsService],
  exports : [ResultatsService]
})
export class ResultatsModule {}
