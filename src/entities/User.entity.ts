import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DATA_User')
export class UserEtt {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @ApiProperty({ example: '1111@ubcare.co.kr', description: '회원이메일' })
  @IsString()
  @IsEmail()
  @Column({ name: 'EMAIL' })
  email: string;

  @ApiProperty({ example: '갑돌이', description: '회원명' })
  @IsString()
  @IsNotEmpty()
  @Column({ name: 'USER_NAME' })
  name: string;

  @ApiProperty({
    description: '프로필 이미지',
  })
  @Column({ name: 'PROFILE_IMAGE' })
  profileImg: string;

  @Column({ name: 'CREATE_DT' })
  createDate: Date;

  @Column({ name: 'UPDATE_DT' })
  updateDate: Date;

  @Column({ name: 'WITHDRAWAL_YN' })
  isWithdrawal: boolean;

  @ApiProperty({ example: '서비스 기능 불편', description: '탈퇴사유' })
  @IsString()
  @Column({ name: 'WITHDRAWAL_REASON' })
  withdrawalReason: string;
}
