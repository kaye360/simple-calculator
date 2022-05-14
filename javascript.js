const content = document.getElementById('content')
const contentTop = document.getElementById('contentTop')
const contentBottom = document.getElementById('contentBottom')
const clear = document.getElementById('clear')

const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const subtract = document.getElementById('subtract')
const add = document.getElementById('add')
const equal = document.getElementById('equal')



function clearContent() {
    contentTop.innerText = ''
    contentBottom.innerText = ''
}

function insertContent(newNum) {
    contentTop.append(newNum)
}

function calcContent () {
    let currentContent = document.getElementById('contentTop').innerText
    let solved = eval(currentContent)

    contentBottom.innerText = solved

}
    


// get all id's into an array
let buttons = document.getElementsByClassName('button')

// loop thru array and get the name of the array
for (let i = 0; i < buttons.length; i++) {

    let insertNum = buttons[i].innerText

    if (insertNum === 'Clear') {
        buttons[i].addEventListener('click', clearContent)
        
    } else if (insertNum === '=') {
        buttons[i].addEventListener('click', calcContent)

    } else if (insertNum === 'x') {
        buttons[i].addEventListener('click', function() {insertContent('*')})
        
    } else   {
        buttons[i].addEventListener('click', function() {insertContent(insertNum)})
    }
    
}
