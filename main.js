#! /usr/bin/env node
import inquirer from "inquirer";
// array
let todos = ["Mango", "Banana"];
async function creatTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "update", "view", "delete"],
        });
        if (answer.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (answer.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (answer.select == "view") {
            console.log("****TO DO LIST****");
            console.log(todos);
            console.log("*************");
        }
        if (answer.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let newTodo = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
creatTodo(todos);
