import { VERSION } from '@angular/core';

export class AuthService {
  signupUser(email: string, password: string) {
    console.log('this user', email, 'was created');
  }
}
