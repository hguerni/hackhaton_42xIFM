import { Module } from '@nestjs/common';
import { SaleService } from '../services/sale.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SaleService],
})
export class SaleModule {}
