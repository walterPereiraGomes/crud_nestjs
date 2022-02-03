import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: false },
    { id: 2, description: 'Tarefa 2', completed: false },
    { id: 3, description: 'Tarefa 3', completed: false },
    { id: 4, description: 'Tarefa 4', completed: false },
    { id: 5, description: 'Tarefa 5', completed: false },
    { id: 6, description: 'Tarefa 6', completed: false },
    { id: 7, description: 'Tarefa 7', completed: false },
    { id: 8, description: 'Tarefa 8', completed: false },
    { id: 9, description: 'Tarefa 9', completed: false },
    { id: 10, description: 'Tarefa 1', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number): Task {
    return this.tasks.find((item) => item.id == id);
  }

  create(task: Task): Task {
    task.id = Math.max(...this.tasks.map((t) => t.id)) + 1;
    this.tasks.push(task);

    return task;
  }

  update(newTask: Task, id: number): Task {
    try {
      const indexTask: number = this.tasks.findIndex((task) => task.id == id);

      if (!indexTask) throw new Error('task não encontrada');

      this.tasks[indexTask].description = newTask.description;
      this.tasks[indexTask].completed = newTask.completed;

      return this.tasks[indexTask];
    } catch (e: any) {
      console.log('e :>> ', e);
    }
  }

  delete(id: number) {
    const indexTask: number = this.tasks.findIndex((task) => task.id == id);

    this.tasks.splice(indexTask, 1);
  }
}
