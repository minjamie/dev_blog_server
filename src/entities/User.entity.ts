import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { TEAM_TYPE } from 'src/common/const/enum';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty({ example: '1111@ubcare.co.kr', description: '회원이메일' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Column({ name: 'email', nullable: true })
  email: string;

  @ApiProperty({ example: '김민재', description: '회원명' })
  @Column({ name: 'user_name', nullable: true })
  userName: string;

  @ApiProperty({
    description: '프로필 이미지',
  })
  @Column({ name: 'profile_image', nullable: true })
  profileImage: string;

  @ApiProperty({
    example: '저는 플랫폼 개발팀 김민재입니다.',
    description: '소개',
  })
  @Column({ name: 'introduce', nullable: true })
  introduce: string;

  @Column({ name: 'is_operator', default: false })
  isOperator: boolean;

  @ApiProperty({ example: 'D220201', description: '사원 번호' })
  @Column({ name: 'employee_num', nullable: true })
  @IsString()
  @IsNotEmpty()
  employeeNumber: string;

  @Column({ name: 'create_dt' })
  createDate: Date;

  @Column({ name: 'update_dt' })
  updateDate: Date;

  @Column({ name: 'withdrawal_yn', default: false })
  isWithdrawal: boolean;

  @Column({ name: 'auth_yn', default: false })
  isAuth: boolean;

  @ApiProperty({ example: 1, description: '팀 타입' })
  @Column({ name: 'team_type', nullable: true })
  teamType: TEAM_TYPE;
}
