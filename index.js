// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', configObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        const id = object.id;
        const idElement = document.createElement('p');
        idElement.textContent = id;
        document.body.appendChild(idElement);
    })
    .catch(function(error){
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message
        document.body.appendChild(errorElement);
    })
}

const configObject = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })
}