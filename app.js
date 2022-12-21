/*
const array1 = ['a', 'b', 'c', 'd', 'e'];

const array2  = array1.slice(0, 2);

console.log(array2);
*/

//BaseURL: https://apis.scrimba.com/jsonplaceholder/
//Endpoint: /post

const container = document.getElementById('container');


fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then((response) => response.json())
  .then((data) => {
    const blogPosts = data.slice(0, 5)
    renderPosts(blogPosts);
  })


function renderPosts(blogPosts) {
  for (let element of blogPosts) {
    container.innerHTML += `<h2>${element.title}</h2>
                          <p>${element.body}</p>
                          <hr></hr>`


  }
}
