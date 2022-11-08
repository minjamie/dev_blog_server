import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TeamEntity } from './Team.entity';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @ApiProperty({ example: '1111@ubcare.co.kr', description: '회원이메일' })
  @IsString()
  @IsEmail()
  @Column({ name: 'EMAIL' })
  email: string;

  @ApiProperty({ example: '갑돌이', description: '회원명' })
  @Column({ name: 'USER_NAME' })
  name: string;

  @ApiProperty({
    description: '프로필 이미지',
  })
  @Column({ name: 'PROFILE_IMAGE' })
  profileImg: string;

  @ApiProperty({
    example: '저는 플랫폼 개발팀 김민재입니다.',
    description: '소개',
  })
  @Column({ name: 'INTRODUCE' })
  introduce: string;

  @ApiProperty({ example: 'D220201', description: '사원 번호' })
  @Column({ name: 'EMPLOYEE_NUMBER' })
  employeeNumber: string;

  @Column({ name: 'CREATE_DT' })
  createDate: Date;

  @Column({ name: 'UPDATE_DT' })
  updateDate: Date;

  @Column({ name: 'WITHDRAWAL_YN' })
  isWithdrawal: boolean;

  @Column({ name: 'AUTH_YN' })
  isAuth: boolean;

  @OneToOne(() => TeamEntity, (team) => team.user)
  team: TeamEntity;
}
