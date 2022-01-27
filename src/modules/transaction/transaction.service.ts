import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrimaryColumnCannotBeNullableError, Repository } from 'typeorm';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { Transactions } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  private logger = new Logger(TransactionService.name);
  constructor(
    @InjectRepository(Transactions)
    private taskRepository: Repository<Transactions>,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transactions> {
    this.logger.log(`called method ${this.create.name}()`);
    return await this.taskRepository.save(createTransactionDto);
  }

  async findAll(): Promise<Transactions[]> {
    return await this.taskRepository.find();
  }
}
