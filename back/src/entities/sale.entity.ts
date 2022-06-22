import {  BaseEntity,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Column,
    JoinTable,
    JoinColumn,
    OneToOne,
    ManyToMany,
    OneToMany,
    Entity,
    ManyToOne} from 'typeorm';
  import { isBoolean, IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';
import { UserEntity } from './user.entity';
  
  @Entity('sales')
  export class SaleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @CreateDateColumn()
  date: Date;
  
  @IsString()
  file_url: string;
  
  @ManyToOne(() => UserEntity, user => user.sales)
  user: UserEntity;

  @ManyToOne(() => UserEntity, user => user.bought)
  client: UserEntity;

  @Column()
  @IsNumber()
  price: number;
  
}