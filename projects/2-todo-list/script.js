
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  function populateTodoList(todos) {
  let list = document.querySelector("#todo-list");
  list.replaceChildren([]);
  todos.forEach(addTask); 
}

function addTask(todo) {
  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  let completedButton = document.createElement("i");
  completedButton.className = "fa fa-check";
  span.appendChild(completedButton);
  
  let deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash";
  span.appendChild(deleteButton);

  let li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerText = todo.task;
  li.appendChild(span);

  if (todo.completed) {
    li.style = "text-decoration: line-through;";
  }

  let list = document.querySelector("#todo-list");
  list.appendChild(li);
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
 
];

populateTodoList(todos);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

//1. fig out the input- done 
//2. creat an new object based on the input-done
//3. push it into the todos array-done
//4. call the populateTodoList

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let input = document.querySelector("#todoInput");
  console.log(input.value);

  let newToDo = { task: input.value, completed: false }
  todos.push(newToDo);
  populateTodoList(todos);
}


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
