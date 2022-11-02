import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class IsShowDto {
  @ApiProperty({
    example: true,
    description: '노출여부',
  })
  @IsBoolean()
  @IsNotEmpty()
  isShow: boolean;
}
