fetch('https://jsonplaceholder.typicode.com/todos')
//resoving the response from the promise that the fetch returned
    .then(res => res.json())
    .then(todos => {
        entryPoint = document.getElementById('app')
        let todoList = document.createElement('ul')
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(comments {
                entryPoint = document.getElementById('app')
                // let emailList = document.createElement('ul')
            })
                //it does not like my two arguments in the for loop 
        todos.forEach((todo,email) => {
            let todoItem = document.createElement('li')
                todoItem.innerHTML = `
                <p>${todo.id}</p>
                <p>${todo.title}</p>
                <p>${todo.completed}</p>
                `
            let emailList = document.createElement('li')
                //below i am trying set the email to the post id's that match
                if(todo.id[0] === email.id[0]){
                    todoList.id[i].appendChild(emailList.email[i])
                
                }
                todoList.appendChild(todoItem)
                
                
        })
        entryPoint.appendChild(todoList)
    })