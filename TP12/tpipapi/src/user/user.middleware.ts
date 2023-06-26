import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if(req.session.token) {
      next()
    }
    else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }
  }
}
