import { Printable } from "./Printable";

export class Todo implements Printable {
  task: string;
  priority: string;
  taskDone: boolean;
  constructor(task: string, priority: string, taskDone: boolean) {
    this.task = task;
    this.priority = priority;
    this.taskDone = taskDone;
  }
  printAllFields() {
    console.log(
      "Task: " +
        this.task +
        " | " +
        "Priority: " +
        this.priority +
        " | " +
        "Done:" +
        this.taskDone
    );
  }
}

export class Todos {
  todos: any[] = [];
  addTasks(todo: Todo) {
    this.todos.push(todo);
  }
}
