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

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    console.log('OG response:', response)
    return response.json()
  })
  .then((json) => {
    console.log('OG json:', json)
    arrayOfTodos = json
  })
}

const logTodos = (todos) => {
  console.log(todos)
}

const populateTodos = (todos, otherFn) => {
  todos.forEach(todo => {
    if (!todo.completed) {
      createIncompleteElement(todo)
    } else {
      createElement(todo)
    }
    otherFn(arrayOfTodos)
  })
}
populateTodos(arrayOfTodos, logTodos(arrayOfTodos))


const createIncompleteElement = (todo) => {
//   Then capture the ol item into a variable (getElementById)
let ol = document.querySelector('ol')
// let ol2 = document.getElementsByTagName('ol')
// console.log('ol:', ol)
console.log('ol:', ol)
ol.style.height = '100px';
ol.style.width = '100px';
ol.style.backgroundColor = 'blue';
// ol2[0].style.height = '100px';
// ol2[0].style.width = '100px';
// ol2[0].style.backgroundColor = 'blue';
// createElement to make a new li
// createTextNode inside the li using the title property.
// Now append the text to the new element.
// Then append the element to the ol element.
}