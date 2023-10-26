
// function clickedOutside(element, e) {
//     return !(element == e.target ||
//     element.contains(e.target))
// }

// document.addEventListener('click', (e) => {
//     if (clickedOutside(todoContainer, e)) {
//         hideTodos()
//     }
// })

// todoContainer.addEventListener('click', (e)=>{
//     if (e.target == todoContainer) hideTodos()
// })

// HIDE AND SHOW POPUP FOR TODO
// todoBtn.addEventListener("click", showTodos)

/*
function renderTodo() {
    let listItems = ""
    for (let item of listOfTodo) {
         listItems += 
            `
            <ul>
                <li class="checkbox">
                    <input type="checkbox" id="${item}"><p> ${item}</p>
                </li>
            </ul>
            
            `
    }
    todoContent.innerHTML = listItems
}
*/

// function renderLinks() {
//     let linksItem = ""
//     for (let link of listofLinks) {
//         linksItem += 
//         `
//         <a href="${link}" class="a-links">${link}</a>
//         `
//     }
//     linksContent.innerHTML = linksItem

// }