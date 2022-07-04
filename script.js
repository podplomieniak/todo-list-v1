const input = document.querySelector('#input')
const button = document.querySelector('#button')
const list = document.querySelector('#tasks-list')
const _Date = new Date()

const placeholders = [
    'wrestle a bear',
    'fight some babies',
    'commit tax fraud',
    'binge watch South Park',
    'support Ukraine 🇺🇦',
    'take back Jerusalem',
    'not code in C'
]

input.placeholder = placeholders[Math.floor(Math.random() * placeholders.length)]

button.addEventListener('click', (e)=>{addTask(e)})

const addTask = (e) => {
    e.preventDefault()
    //value check
    const val = input.value.trim()
    if(val.length === 0) return
    
    //define an element
    const elem = document.createElement('li')
    elem.className = 'task'
    elem.addEventListener('dblclick', removeTask)
    elem.addEventListener('click', toggleClass)
    elem.innerText = val

    //appending and resetting input
    list.appendChild(elem)
    input.value = ""
}

const removeTask = (e) => {
    e.preventDefault()
    list.removeChild(e.target)
}

const toggleClass = (e) => {
    e.preventDefault()
    e.target.classList.toggle('task-done')
}