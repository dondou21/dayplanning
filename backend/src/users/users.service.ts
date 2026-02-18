import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async create(email: string, password: string): Promise<User> {
        return this.prisma.user.create({
            data: {
                email,
                password,
            },
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        if (!email) {
            return null;
        }
        return this.prisma.user.findUnique({
            where: { email },
        });
    }

    async findById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: { email?: string; password?: string }): Promise<User> {
        const updateData: any = { ...data };
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.user.update({
            where: { id },
            data: updateData,
        });
    }
}
