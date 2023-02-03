import { Injectable } from '@nestjs/common';
import { TaskService } from './tasks/shared/task/task.service';

@Injectable()
export class AppService {
  getHello(): string {
    return TaskService;
  }
}
