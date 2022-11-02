import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEtt } from 'src/entities/User.entity';
import { AuthService } from './auth.service';
import { JwtModuleConfig } from './jwt-config';
import { JwtUserStrategy } from './strategies/jwt-user.strategy';
import { LocalUserStrategy } from './strategies/local-user.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register(JwtModuleConfig),
    TypeOrmModule.forFeature([UserEtt]),
  ],
  providers: [AuthService, LocalUserStrategy, JwtUserStrategy],
  exports: [AuthService],
})
export class AuthModule {}
