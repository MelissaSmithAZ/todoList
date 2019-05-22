fetch('https://jsonplaceholder.typicode.com/todos')

    .then(res => res.json())
    //this .then is converting it into data that we will than organize and manipulate 
    .then(todos => {
        entryPoint = document.getElementById('app')
        let todoList = document.createElement('ul')
            // newTodoList.classList.add("list-group-item")
        
        
        

        todos.forEach(todo => {
            let newTodoList = document.createElement('li')
                // newTodoList.classList.add("list-group-item")
            
            
            newTodoList.innerHTML = `
                <p>${todo.id}</p>
                <p>${todo.title}</p>
                <p>${todo.completed}</p>
            `
            todoList.appendChild(newTodoList)
        })
    entryPoint.appendChild(todoList)
    })