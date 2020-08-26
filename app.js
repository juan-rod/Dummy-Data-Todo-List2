// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
{
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
let todoByUserId
// console.log("arrayOfTodos BEFORE:", arrayOfTodos)
// var filterOutIdOne = (todo) => {
//   return todo.id === 1
// }
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
// arrayOfTodos = arrayOfTodos.filter(filterOutIdOne)
// console.log("arrayOfTodos AFTER:", todosIdOne)
// console.log('userId', arrayOfTodos[0].userId)
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  // console.log(arrayOfTodos)
}

const populateTodos = () => {
  // access the ol tag to insert list items
  var ol = document.getElementById('todo-list')

  // loop through array to populate dom with each items title
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const complete = arrayOfTodos[index].completed
    // console.log('complete:', arrayOfTodos[index], complete)
    // created listItem
    var listItem = document.createElement("li"); 
    // get array item title
    const title = arrayOfTodos[index].title
    // created text to go inside <li> text </li>
    var listItemText = document.createTextNode(title); 

    if (!complete) {
      // make text red
    } else {
      // make text any color
    }

    // appended the text to the listItem
    listItem.appendChild(listItemText);

    // append to <ol> <li> Hi there and greetings! </li> </ol>
    ol.appendChild(listItem)
  }
}
const populateUserSelection = () => {
  const inputElement = document.getElementsByTagName('input')
  let inputValue = inputElement[0].value
  // clear array

arrayOfTodos = arrayOfTodos.filter(todo => todo.userId === parseInt(inputValue))
  console.log('arrayOfTodos:', arrayOfTodos)
  // store the new Array 
}
const removeTodos = () => {
  // remove todos
  // show todos that are either complete and not completed
}