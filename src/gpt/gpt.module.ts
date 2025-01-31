import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importamos ConfigModule
import { GptService } from './gpt.service';
import { GptController } from './gpt.controller';

@Module({
  imports: [ConfigModule], // Agregamos ConfigModule aquí
  controllers: [GptController],
  providers: [GptService],
})
export class GptModule {}
