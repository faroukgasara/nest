import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';
import { CategoriesModule } from './categories/categories.module';
import { TemplatesModule } from './templates/templates.module';
import { ReponsesModule } from './reponses/reponses.module';
import { AuthModule } from './auth/auth.module';
import { ResultatsModule } from './resultats/resultats.module';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost/users'), QuestionsModule, CategoriesModule, TemplatesModule, ReponsesModule, AuthModule, ResultatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
