let todoList = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json());

let comments = fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
let  entryPoint = document.getElementById('app')
let newList = document.createElement('ul')

let combinedData = {"todoList":{}, "comments":{}}
Promise.all([todoList,comments]).then(function(values){
    combinedData["todoList"] = values[0]
    combinedData["comments"] = values[1]
    return combinedData;
    //as cobinedData is an object or so i think it is an object with arrays we can't do a forEach unless we use Object.keys i don't get an error when i do this however my concern is if iam converting to an array than combine so the .method does not work?  i tried the []as well
    Object.keys(combinedData).forEach(data => {
        let listItems = document.createElement('li')
        listItems.innerHTML = `
        <p>${values[0].id}</p>
        <p>${values[0].title}</p
        <p>${values[1].email}</p>
        `
        newList.appendChild(listItems)
    })
entryPoint.appendChild(newList)
    
});


