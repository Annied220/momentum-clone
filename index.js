const timeEl = document.getElementById('local-time')
const locationEl = document.getElementById('location')
const weatherEl = document.getElementById('weather')
const focusInput = document.getElementById('focus-input')
const linksBtn = document.getElementById('links-btn')
const todoBtn = document.getElementById('todo-btn')
let focusInputText; /*updation*/





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
            locationEl.innerHTML = `Unknown`
        } else if (theCity === null || theCountry === null ) {
            locationEl.innerHTML = `Unknown`
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

            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

           
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

// Todo

const todoInput = document.getElementById('todo-input')
const todoContent = document.getElementById('todo-content')
const todoContainer = document.getElementById('todo-container')
const closeBtn = document.getElementById('close-btn')


listOfTodo = []

let listsFromLocalStorage = JSON.parse(localStorage.getItem('mytodolist'))

todoBtn.addEventListener("click", function() {
    // todoContainer.style.display = 'block';

    todoContainer.style.display = 'inline'
})

closeBtn.addEventListener("click", function() { 

    todoContainer.style.display = 'none'
})




document.getElementById("close-btn").disabled = true;

if (listsFromLocalStorage) {
    listOfTodo = listsFromLocalStorage
    renderLists()
}



todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
       
      listOfTodo.push(todoInput.value)

        todoInput.value = "";

      
      localStorage.setItem("mytodolist", JSON.stringify(listOfTodo));
      renderLists();


    }
});

// function clearInput() {
// }

function renderLists() {
    let listItems = ""
    for (let item of listOfTodo) {
         listItems += 
        `
        <li>
            <input type="checkbox"><p>${item}</p>
        </li>
        
        `
    }

    todoContent.innerHTML = listItems
}


