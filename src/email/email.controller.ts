import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailEntity } from './email.entity/email.entity';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Get()
    findAll(): Promise<EmailEntity[]> {
      return this.emailService.findAll();
    }

    @Post()
    create(@Body() item: EmailEntity): Promise<EmailEntity> {
      return this.emailService.create(item);
    }
}
