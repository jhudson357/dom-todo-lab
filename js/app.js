const inputElement = document.getElementById('input')
const buttonElement = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')
const resetButtonElement = document.getElementById('reset-button')


buttonElement.addEventListener('click', handleClick)
resetButtonElement.addEventListener('click', handleResetClick)


function handleClick(evt) {
  // create new <li> element
  const li = document.createElement('li')

  // access the text from the inputElement & store it in the <li>
  li.textContent = inputElement.value
  
  //don't allow empty items to be added to list
  if(inputElement.value !== '') {
    // append the <li> (with the text included) to the <ul> in the HTML
    ulElement.appendChild(li)
  } 
  
  // clear the input field to an empty string
  inputElement.value = ''
}

function handleResetClick (evt) {
  // clear input field
  inputElement.value = ''

  // remove all items from the to-do list
  document.getElementById('todo-list').innerHTML = ''
}

// RESET BUTTON - alternate way to add using JS
// const resetButton = document.createElement('button')
// resetButton.innerHTML = 'Reset'
// document.body.appendChild(resetButton)