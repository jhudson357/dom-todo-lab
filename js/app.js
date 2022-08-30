const inputElement = document.getElementById('input')
const buttonElement = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')

buttonElement.addEventListener('click', handleClick)

function handleClick(evt) {
  // create new <li> element
  const li = document.createElement('li')
  
  // access the text from the inputElement & store it in the <li>
  li.textContent = inputElement.value
  
  // append the <li> (with the text included) to the <ul> in the HTML
  document.querySelector('ul').appendChild(li)
  
  // clear the input field to an empty string
  inputElement.value = ''
}