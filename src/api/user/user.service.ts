import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/business/mail/mail.service';
import { UserEntity } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { InsertUBcareUserDto, OutGetUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly mailService: MailService,
  ) {}

  async getProfile(id: number) {
    const user: UserEntity = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException('해당 유저는 존재하지 않습니다.');

    return user as OutGetUserDto;
  }

  async insertUBcareUser(data: InsertUBcareUserDto) {
    const teamCheck = await this.userRepository.findOne({
      where: { employeeNumber: data.employeeNumber },
      relations: ['team'],
    });

    if (teamCheck.team === data.name) {
      const user = await this.userRepository.insert(data);
      await this.mailService.sendMailToUser(teamCheck.email);
    } else {
    }
  }
}
