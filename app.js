// GET request (Give me data!)
  // Request to get information from an API
  // Different API endpoints => different data returned
  // One argument => the url you are requesting data from

const baseUrl = 'https://swapi.co/api/'

fetch(`${baseUrl}people/2`)  //Asynchronous request
.then(function (response) {   //Wait for respone to continue
  return response.json()   //Turn response into json and return it to next .then
})
.then(function (data) {
  console.log(data)
  let name = data.name   //Do something with the data; often DOM manipulation
  let cardTitle = document.querySelector('.card-title')
  cardTitle.textContent = name
})
.catch(function(error) {
  console.log(error)
})

//POST request
  //We HAVE some information and we send it to the API
  //Typically user interaction through form
  //This code won't work... it's just an example

// let userName = document.querySelector('#user-name').value
// let address = document.querySelector('#address').value
// let postObject = {
//   name: userName,
//   address: address
// }
//
// let postOptions = {
//   method: 'POST',
//   headers: new Headers({'Content-Type': 'application/json'})
//   body: JSON.stringify(postObject)
// }
//
// fetch(`${baseUrl}submit`)
// .then(function(response){
//   return response.json()
// })
// .then(function(data){
//   console.log(data);
// })
// .catch(function(error){
//   console.log(error);
// })
