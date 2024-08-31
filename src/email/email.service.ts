import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailEntity } from './email.entity/email.entity';
import { Repository } from 'typeorm';

@Injectable()

export class EmailService {
    constructor(
        @InjectRepository(EmailEntity)
        private emailRepository: Repository<EmailEntity>,
    ){}

    findAll(): Promise<EmailEntity[]>{
        return this.emailRepository.find();
    }

    findOne(id : number): Promise<EmailEntity>{
        return this.emailRepository.findOne({ where : { id }});
    }

    async create(item: EmailEntity): Promise<EmailEntity> {
        return this.emailRepository.save(item);
      }
    
    async update(id: number, item: Partial<EmailEntity>): Promise<EmailEntity> {
        await this.emailRepository.update(id, item);
        return this.findOne(id);
      }
    
    async remove(id: number): Promise<void> {
        await this.emailRepository.delete(id);
      }
}
