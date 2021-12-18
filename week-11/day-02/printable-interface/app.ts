import { Domino, Dominoes } from "./Domino";
import { Todo, Todos } from "./Todo";

let domino1 = new Domino(3, 2);
let domino2 = new Domino(5, 8);
let dominoes = new Dominoes();
dominoes.addDominoes(domino1);
dominoes.addDominoes(domino2);

let task1 = new Todo("Buy milk", "high", true);
let task2 = new Todo("Buy lasagna", "low", false);
let todos = new Todos();
todos.addTasks(task1);
todos.addTasks(task2);

for (let domino of dominoes.dominoes) {
  domino.printAllFields();
}

for (let todo of todos.todos) {
  todo.printAllFields();
}
