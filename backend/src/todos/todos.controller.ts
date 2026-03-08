import { Body, Controller, Delete, Get, Param, Post, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { TodosService } from './todos.service';

@UseGuards(JwtAuthGuard)
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Post()
    async create(@Body() body: { title: string; priority?: string; category?: string; dueDate?: string }, @Req() req) {
        const { title, ...details } = body;
        const processedDetails = {
            ...details,
            dueDate: details.dueDate ? new Date(details.dueDate) : undefined,
        };
        return this.todosService.create(title, req.user.userId, processedDetails);
    }

    @Get()
    async findAll(@Req() req) {
        return this.todosService.findAll(req.user.userId);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Req() req) {
        return this.todosService.findOne(Number(id), req.user.userId);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: { title?: string; completed?: boolean }, @Req() req) {
        return this.todosService.update(Number(id), req.user.userId, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Req() req) {
        return this.todosService.delete(Number(id), req.user.userId);
    }
}
