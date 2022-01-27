/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Transactions')
export class Transactions extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
  @Column({ name: 'title' })
  public title: string;
  @Column({ name: 'amount' })
  public amount: number;
  @Column({ name: 'category' })
  public category: string;
  @Column({ name: 'type' })
  public type: string;
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;
}
