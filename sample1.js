fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        let table = document.getElementById('userTable');   
        users.forEach(user => {
             let row=document.createElement('tr');  
             row.innerHTML = 
             ` <td>${user.userId}</td>
             <td>${user.id}</td>
             <td>${user.title}</td>
             <td>${user.body}</td>`;
             table.appendChild(row);
        })
    })
    .catch((error)=>console.log(error))