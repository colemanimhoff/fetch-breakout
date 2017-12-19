// GET request
  // Request to get information from an API
  // Different API endpoints => different data returned
  
  // One argument => the url you are requesting data from
  // 
  
var baseUrl = 'https://swapi.co/api/'

fetch(baseUrl + 'people/2')         // Asynchronous request
  .then(function(response) {        // Wait for response to continue
    console.log(response)
    return response.json()          // Turn response into json and return it to next .then
  })      
  .then(function(data) {
    // DO SOMETHING with the data
    // Often DOM manipulation
    console.log(data)

    var name = data.name
    var height = data.height
    var cardTitle = document.querySelector('span.card-title')
    cardTitle.textContent = name
  })
  .catch(function(error) {
    console.log(error)
  })


// POST request
  // We HAVE some information and we send it to the API
  // Typically user interaction through form

var username = document.querySelector('#username').value
var address = document.querySelector('#address').value

var postObject = {
  name: username,
  address: address
}

var postOptions = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(postObject)
}

fetch(baseUrl + '/submit', postOptions)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })