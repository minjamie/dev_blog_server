import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtUserAuthGuard } from 'src/auth/guards/user-auth.guard';
import { ResponseSignIn } from 'src/common/decorators/response.decorator';
import { ReqUser } from 'src/common/decorators/user.decorator';
import { InsertUBcareUserDto, OutGetUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @ApiOperation({ summary: '내 정보조회' })
  @ApiBearerAuth()
  @UseGuards(JwtUserAuthGuard)
  @Get('my')
  async getProfile(@ReqUser() account): Promise<OutGetUserDto> {
    const profile = await this.userService.getProfile(account.id);
    return profile;
  }

  @ApiOperation({ summary: '회원가입 UBcare' })
  @ResponseSignIn()
  @ApiBody({ type: InsertUBcareUserDto })
  @Post('UBcare')
  async insertUBcareUser(@Body() data: InsertUBcareUserDto) {
    const user = await this.userService.insertUBcareUser(data);
    return user;
  }
}
