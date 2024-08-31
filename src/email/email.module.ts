import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailEntity } from './email.entity/email.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmailEntity])],
  providers: [EmailService],
  controllers: [EmailController]
})
export class EmailModule {}
