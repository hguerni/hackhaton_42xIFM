import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user.module";
import { AuthModule } from "./modules/auth.module";
import { SaleModule } from "./modules/sale.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/config.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    AuthModule,
    SaleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

