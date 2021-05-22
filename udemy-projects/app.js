/**
 * @author Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 * This program will convert an integer into a roman numeral
 * all roman numeral answers will be returned in upper case
 *
 * @param input {string} the number the will convert into a roman numeral
 *
 * @function todoList
 * */

// "new" - Add A to do item
// "list" - List All Items
// "delete" - Remove a specific to do item
// "quit" - Quit App

function todoList() {
    alert('you are starting the todo list program!');
    let todoList = [];
    let promptValue = prompt('Please enter your command: ');
    while (promptValue !== 'quit') {
        promptValue = prompt('Please enter your command: ');
        if (promptValue === 'new') {
            let newTask = prompt('Please enter you new task: ')
            todoList.push(newTask);
            console.log(todoList);
        } else if (promptValue === 'list') {
            console.log(todoList);
        }
        promptValue = prompt('Please enter your command: ');
    }
    console.log("You quit the application.")
}


todoList()
