import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async register(email: string, password: string) {
        const existingUser = await this.usersService.findByEmail(email);

        if (existingUser) {
            throw new BadRequestException('Email already in use');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.usersService.create(email, hashedPassword);
        const payload = { email: user.email, sub: user.id };

        const { password: _, ...result } = user;
        return {
            user: result,
            access_token: this.jwtService.sign(payload),
        };
    }

    async logout() {
        return { message: 'Logged out successfully' };
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new BadRequestException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new BadRequestException('Invalid credentials');
        }

        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
