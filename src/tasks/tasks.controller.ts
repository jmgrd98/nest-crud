import { Controller, Get, Post, Put, Delete Param } from "@nestjs/common";
import { TaskService } from "./shared/task/task.service";
import { Task } from "./shared/task/task";

@Controller('tasks')
export class TasksController{

    constructor(
        private taskService: TaskService
        ) {}
        
            @Get()
            async getAll(): Promise<Task[]> {
                return this.taskService.getAll();
            };

            @Get(':id')
            async getById(@Param('id') id: number): Promise<Task>{
                return this.taskService.getById(id)
            };

            @Post()
            async create(task:Task): Promise<Task>{

            }

            @Put(){
                
            }

};