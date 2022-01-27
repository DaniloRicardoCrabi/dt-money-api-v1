import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModule } from './modules/transaction/transaction.module';
import * as typeormConfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
