import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { getRepository, Repository } from 'typeorm';
import { UpdateUserDTO, RegisterDTO } from '../models/user.model';
import { SaleEntity } from '../entities/sale.entity';

@Injectable()
export class UserService {
  getById(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    @InjectRepository(SaleEntity)private saleRepo: Repository<SaleEntity>,
  ) {}

  async saveTwoFactorSecret(secret: string, clientID: number): Promise<any> {
    const client = await this.findByFtId(clientID);
    return this.userRepo.update(client.id, { twofaSecret: secret });
  }

  async enableTwoFactor(clientID: number): Promise<any> {
    const client = await this.findByFtId(clientID);
    return this.userRepo.update(client.id, { twofa: true });
  }

  async disableTwoFactor(clientID: number): Promise<any> {
    const client = await this.findByFtId(clientID);
    return this.userRepo.update(client.id, { twofa: false });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  async findByUsername(login: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { login } });
  }

  async findByFtId(ft_id: number): Promise<UserEntity> {
    return await this.userRepo.findOne({where: { ft_id }});
  }

  async updateUser(data: UpdateUserDTO) {
    return await this.userRepo.update(data.id, data);
  }

  async updateAvatar(data: UserEntity) {
    return await this.userRepo.update(data.id, data);
  }

  async createUser(data: RegisterDTO) {
    return await this.userRepo.save(data);
  }
}