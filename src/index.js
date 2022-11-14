import './scss/style.scss'

const btn = document.querySelector('button')
const input = document.querySelector('input')

const sendData =  (e) => {
  e.preventDefault()
  if (input.value) {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then(() => {
        alert('done')
      })
      .catch(()=>console.log('error'))
  } else {
    alert('input something')
  }
}

btn.addEventListener('click', sendData)
