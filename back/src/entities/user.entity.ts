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
  Entity} from 'typeorm';
import { isBoolean, IsBoolean, IsEmail, IsString } from 'class-validator';
import { SaleEntity } from './sale.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@CreateDateColumn()
created: Date;

@UpdateDateColumn()
updated: Date;

@Column({ unique: true })
@IsEmail()
@IsString()
email: string;

@Column()
@IsString()
avatar: string;

@Column({unique: true})
@IsString()
login: string;

@Column()
@IsString()
password: string;

@OneToMany(() => SaleEntity, sales => sales.pending)
sales: SaleEntity[];

@OneToMany(() => SaleEntity, bought => bought.sold)
bought: SaleEntity[];

@Column({default: false})
@IsString()
status: string;

@Column()
@IsBoolean()
twofa: boolean;

@Column({ nullable: true })
twofaSecret?: string;
}