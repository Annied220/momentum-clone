const timeEl = document.getElementById('local-time')
const locationEl = document.getElementById('location')
const weatherEl = document.getElementById('weather')
const focusInput = document.getElementById('focus-input')
const linksBtn = document.getElementById('links-btn')
const todoBtn = document.getElementById('todo-btn')
let focusInputText; /*updation*/


// Todo

const todoInput = document.getElementById('todo-input')
const todoContent = document.getElementById('todo-content')
const todoListElement = document.querySelector('#todo-content ul')
const todoContainer = document.getElementById('todo-container')
const closeBtn = document.getElementById('close-btn')


// Links

const linksInput = document.getElementById('links-input')
const linksContainer = document.getElementById('links-container')
const linkscloseBtn = document.getElementById('links-close-btn')
const linksElement = document.getElementById('links-element')


// Background Image
fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then (res => res.json())
    .then (data => {

        document.body.style.backgroundImage = `url(${data.urls.full})`

        const theCity = data.location.city;
        const theCountry = data.location.country;

        if (theCity === null) {
             locationEl.innerHTML = `<span class="small">${theCountry}</span>`
        } else if (theCountry === null) {
            locationEl.textContent = "Unknown"
        } else if (theCity === null || theCountry === null ) {
            locationEl.textContent = "Unknown"
        }
        else {
            locationEl.innerHTML = `<span class="small">${theCity}, ${theCountry}</span>`
        }
    })

// Local Time
const date = new Date()
timeEl.textContent = `${date.toLocaleTimeString("en-us",{timeStyle: "short"})}`


// Weather
navigator.geolocation.getCurrentPosition(position => {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;

    fetch (`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial`)
        .then (res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then (data => {

            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

           
            weatherEl.innerHTML = 
            `
                <div class="icon-row">
                    <img src=${iconUrl} width="60px"/>
                    <h5>${Math.round(data.main.temp)}°C</h5>

                </div>
                <p class="cityname">${data.name}</p>

            `

        })
        .catch(err => console.error(err))
});


// Focus

focusInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const focusInputText = focusInput.value
      console.log(focusInput.value)
    }
});


//ADD LIST ITEM FOR TODO

listOfTodo = []

let todosFromLocalStorage = JSON.parse(localStorage.getItem('mytodolist'))



if (todosFromLocalStorage) {
    listOfTodo = todosFromLocalStorage
    renderTodo()
}


todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        
        listOfTodo.push(todoInput.value)
        
        todoInput.value = "";

        
        localStorage.setItem("mytodolist", JSON.stringify(listOfTodo));
        renderTodo();
        
        
    }
});

//Show Todo

closeBtn.addEventListener("click", hideTodos)


todoBtn.addEventListener('click', ()=>{toggleHideShow(todoContainer)})


function showTodos() {todoContainer.style.display = 'inline'}
function hideTodos() {todoContainer.style.display = 'none'}
function toggleHideShow(container) {
    if (container.style.display === "none"
        || container.style.display === "") {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
}
function renderTodo() {
    todoListElement.innerHTML = ""
    listOfTodo.forEach((item, i) => {
        // creating elements
        let li = document.createElement('li')
        let input = document.createElement('input')
        let p = document.createElement('p')

        //  modify elements
        li.classList.add('checkbox')
        input.setAttribute('type', 'checkbox')
        input.id = "todo-"+i
        p.innerText = item
        input.addEventListener('click', ()=>{highlightCheckedOption(input, li)})

        input.addEventListener("mouseover", () => showMore);
        // appending elements
        li.append(input)
        li.append(p)
        todoListElement.append(li)
    })

}

function highlightCheckedOption(input, li) {
    // document.getElementById(e.target.id).parentElement.classList.add('highlight')
    // e.target.classList.toggle('highlight')
    if (input.checked) {
        li.classList.add('highlight')
    } else {
        li.classList.remove('highlight')
    }
}

// Show Links


linksBtn.addEventListener('click', () => {toggleHideShow(linksContainer)})


linkscloseBtn.addEventListener('click', function() {
    linksContainer.style.display = 'none'

})

listofLinks = []

let linksFromLocalStorage = localStorage.getItem('mylinkslist')

if (linksFromLocalStorage) {
    listofLinks = JSON.parse(linksFromLocalStorage)
    renderLinks()
}


linksInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        listofLinks.push(linksInput.value)
        linksInput.value = ""

        localStorage.setItem('mylinkslist', JSON.stringify(listofLinks))
        

        renderLinks()

    }
  }  ) 



function renderLinks() {
    linksElement.innerHTML = ""
    listofLinks.forEach((item,i) => {
        //Create Element
        let li = document.createElement('li')
        let a = document.createElement('a')

        //Modify Element
        li.id = "todo-"+i
        a.textContent = item


        //Append Element
        li.append(a)
        linksElement.append(li)

    })
}



