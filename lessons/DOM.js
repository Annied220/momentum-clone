// GETTING elements from the DOM
let demoEl = document.getElementById('demo')
demoEl = document.querySelector('#demo')
let input = document.querySelector('div > input')
input.style.backgroundColor = 'lime'
let inputs = document.querySelectorAll('input')
for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = i
}
inputs.forEach((input, i) => {
    input.value = i*10
})
/*
    getElementsByClassName
    getElementByTagName
*/

// Creating elements
let span = document.createElement('span')

// Modifying elements
demoEl.innerText = "hello"
span.style.fontSize = "50px"
span.innerHTML = "<u>I'm doug</u>"

/*
    HTMLElement.    
                innerText
                textContent
                innerHTML
                style.
                        color = "blue"
                        backgroundColor = "blue"
                classList.
                            .add()
                            .remove()
                            .toggle()
                            .value
                parentElement
                offsetWidth
                offsetHeight

                addEventListener(event, callback)
                remove()
                getBoundingClientRect()

*/
demoEl.classList.add('xyz')
demoEl.classList.remove('abc')
demoEl.classList.toggle('def')
console.log(demoEl.getBoundingClientRect())



// Appending elements
demoEl.innerHTML = `
    <i>Hi</i>
`

demoEl.append(span)

demoEl.innerHTML += `
    <i>Bye</i>
`

