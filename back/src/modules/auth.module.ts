import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { UserModule } from "./user.module";
import { AuthService } from "../services/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule} from "@nestjs/passport";
import { jwtConstants } from "../models/user.model";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}