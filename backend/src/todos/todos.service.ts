import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodosService {
    constructor(private readonly prisma: PrismaService) { }

    async create(title: string, userId: number) {
        return this.prisma.todo.create({
            data: {
                title,
                userId,
            },
        })
    }

    async findAll(userId: number) {
        return this.prisma.todo.findMany({
            where: {
                userId,
            },
        })
    }

    async findOne(id: number, userId: number) {
        return this.prisma.todo.findUnique({
            where: {
                id,
                userId,
            },
        })
    }

    async update(id: number, userId: number, data: { title?: string; completed?: boolean }) {
        const todo = await this.prisma.todo.findUnique({
            where: {
                id,
            },
        })

        if (!todo) {
            throw new Error('Todo not found');
        }

        if (todo.userId !== userId) {
            throw new Error('Unauthorized');
        }

        return this.prisma.todo.update({
            where: {
                id,
            },
            data,
        })
    }

    async delete(id: number, userId: number) {
        const todo = await this.prisma.todo.findUnique({
            where: {
                id,
            },
        })

        if (!todo) {
            throw new Error('Todo not found');
        }

        if (todo.userId !== userId) {
            throw new Error('Unauthorized');
        }

        return this.prisma.todo.delete({
            where: {
                id,
            },
        })
    }
}
