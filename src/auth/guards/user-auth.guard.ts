import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TOKEN_ERROR_CODE } from 'src/common/const/enum';
import { errorBody } from 'src/common/func/error.func';

@Injectable()
export class LocalUserAuthGuard extends AuthGuard('local-user') {
  handleRequest(err: any, user: any) {
    if (err || !user) {
      if (err) {
        throw new UnauthorizedException(err.response);
      }
      throw new BadRequestException('입력파라미터가 잘못되었습니다.');
    }
    return user;
  }
}

@Injectable()
export class LocalUserAuthDIGuard extends AuthGuard('local-user-di') {
  handleRequest(err: any, user: any) {
    if (err || !user) {
      if (err) {
        throw new UnauthorizedException(err.response);
      }
      throw new BadRequestException('입력파라미터가 잘못되었습니다.');
    }
    return user;
  }
}

@Injectable()
export class JwtUserAuthGuard extends AuthGuard('jwt-user') {
  handleRequest(err: any, user: any, info: any) {
    if (!user) {
      let errorInfo: any;

      if (err) {
        errorInfo = err.response;
      } else {
        if (info.message === 'No auth token') {
          errorInfo = errorBody(
            TOKEN_ERROR_CODE.NOT_EXIST_TOKEN,
            '토큰이 없습니다.',
          );
        } else if (info.message === 'jwt expired') {
          errorInfo = errorBody(
            TOKEN_ERROR_CODE.TOKEN_EXPIRED,
            '토큰이 만료되었습니다.',
          );
        } else {
          errorInfo = errorBody(
            TOKEN_ERROR_CODE.NOT_VALID_TOKEN,
            '토큰이 유효하지 않습니다.',
          );
        }
      }

      throw new UnauthorizedException(errorInfo);
    }
    return user;
  }
}
