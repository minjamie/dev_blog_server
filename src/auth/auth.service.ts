import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEtt } from 'src/entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEtt)
    private userRepository: Repository<UserEtt>,
    private readonly jwtService: JwtService,
  ) {}
}
