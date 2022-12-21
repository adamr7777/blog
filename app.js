/*
const array1 = ['a', 'b', 'c', 'd', 'e'];

const array2  = array1.slice(0, 2);

console.log(array2);
*/

//BaseURL: https://apis.scrimba.com/jsonplaceholder/
//Endpoint: /post

const container = document.getElementById('container');
const formEl = document.getElementById('form-el');
const titleInput = document.getElementById('title-input');
const bodyInput = document.getElementById('body-input');


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



formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const post1 = {title: titleInput.value, body: bodyInput.value}
  fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: 'post',
    body: JSON.stringify(post1),
    headers: {'Content-Type': 'application/json'}
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
})
