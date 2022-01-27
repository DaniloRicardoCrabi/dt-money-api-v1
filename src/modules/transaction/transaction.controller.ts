import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { Transactions } from './entities/transaction.entity';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Transactions> {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  async findAll(): Promise<Transactions[]> {
    return await this.transactionService.findAll();
  }
}
