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

let input = prompt('What would you like to do?');
const todos = ['feed the dogs', 'clean pool']
while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('Here is your current todo list: ')
        console.log('*********')
        for (let i = 0; i < todos.length; i++) {
        console.log(`[${i}] - ${todos[i]}`)
        }
        console.log('*********')
    }
    if (input === 'new') {
        console.log('You are creating a new task')
        let NewTask = prompt('What is your new task?')
        todos.push(NewTask);
        console.log('*********')
        console.log(`New Task Created: ${NewTask}`)
        console.log('*********')
    }

    if (input === 'delete') {
        console.log('you are deleting a new task')
        let deletedTask = parseInt(prompt('What task # do you want to delete?'))
        todos.splice(deletedTask, 1)
    }

    input = prompt('What would you like to do?')
}

console.log('Ok, you quit the app')


