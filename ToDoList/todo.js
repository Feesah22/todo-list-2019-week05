const input = document.getElementById('todoInput')//calling the input 
const submitButton = document.getElementById('submitBtn')//calling the button 
const ul = document.getElementById('todoList')//calling the ul
const clearLi = document.getElementById('clearList')//calling the button 
const remaining = document.querySelector('.remaining')
const clearCompl = document.getElementById('clearCompleted')//calling the button 


function todoList(e) { // starting the function todoList  e= event object/ from the event listener. e= access all the properties and methods for after the event listener function  
    e.preventDefault() // preventing the forms from automatic refresh
    if (todoInput.value === '') {   // if value todoInput equal empty then retun the value
        return
    }

    const li = document.createElement('li')
    const listItemText = document.createElement('span')
    const deleteButton = document.createElement('button') //creating the a for the deleted x
    const text = input.value // assigning the variable text = to the input value 
    // creating the variable li = to document li

    listItemText.innerText = text // put input in the li
    deleteButton.innerText = "x"
    deleteButton.className = 'remove'
    listItemText.className = 'toDoText'

    //-------------------done above-------------------------------//

    li.appendChild(listItemText)// put input in the li
    li.appendChild(deleteButton)
    ul.appendChild(li)

    //reset input field 
    input.value = ""

    updateRemaining()
}


function handleListItemClick(e) {
    // Handle remove button click (button)
    if (e.target.classList.contains("remove")) {
        e.target.parentNode.remove()
        console.log("handleItemClick")
    }
    // Handle todo text click (span)
    else if (e.target.classList.contains("toDoText")) {
        e.target.classList.toggle('strikethrough')
    }
    // Handle list item click (li)
    else {
        e.target.querySelector('.toDoText').classList.toggle('strikethrough')
    }
    updateRemaining()
}

function updateRemaining() {
    console.log('updating remaining5')
    let count = 0
    const todos = document.querySelectorAll("li")
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i].querySelector('.toDoText')
        if (!(todo.classList.contains('strikethrough'))) {
            count++
        }
    }
    remaining.innerText = count
}


//---------------Clear List ------------------------------
function clearList() {
    document.getElementById('todoList').innerHTML = ""
    updateRemaining()
}

//---------------Clear completed ----------
function clearCompleted(){
    const todos = document.querySelectorAll(".strikethrough")
    for (let i = 0; i < todos.length; i++) {
        todos[i].parentNode.remove()

        
    }
 
    
  }




clearCompl.addEventListener('click', clearCompleted)
clearLi.addEventListener('click', clearList)
submitButton.addEventListener('click', todoList)
ul.addEventListener('click', handleListItemClick)
