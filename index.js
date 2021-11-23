const message = document.querySelector('#message')






const addMovie = (event) =>{
    event.preventDefault()
    let inputField = document.querySelector('input')
    
    let movie = document.createElement('li')
    
    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
   
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)



    const list = document.querySelector('ul')
    list.appendChild(movie)

    inputField.value = ""



}

const deleteMovie = (event) =>{
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}


document.querySelector('form').addEventListener('submit', addMovie)

const crossOffMovie = (event) =>{
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked') === true){
        message.textContent = `${event.target.textContent} watched!`
    }else{
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

const revealMessage = () =>{
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}