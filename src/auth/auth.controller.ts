import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //Dependency injection
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp() {
    this.authService.signUp();
  }

  @Post('signin')
  signIn() {
    this.authService.login();
  }
}
