import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Patch('profile')
    updateProfile(@Req() req, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(req.user.userId, updateUserDto);
    }
}
