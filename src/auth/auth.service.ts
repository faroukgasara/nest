import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,private jwtService: JwtService) {}

  async validateUser(email: string, mdp: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.mdp === mdp) {
      const { mdp, email,...rest } = user;
      return user;
    }
    return null;
  }
  
  async login(user : any){
    const payload = {user}
    return {
      access_token: this.jwtService.sign(payload),
      user:payload
    };
  }
}
