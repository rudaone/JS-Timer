'use strict'


//Добавляем элементы в html
const root = document.getElementById('root')
const wrapper = document.createElement('div')
const wrapperBtn = document.createElement('div')
const startBtn = document.createElement('button')
const stopBtn = document.createElement('button')
const resetBtn = document.createElement('button')
const timer = document.createElement('div')
const secText = document.createElement('div')

startBtn.innerText = 'Start'
stopBtn.innerText = 'Stop'
resetBtn.innerText = 'reset'
secText.innerText = 'sec'

//Добавляем классы для элементов
wrapper.className = 'wrapper'
wrapperBtn.className = 'wrapperBut'
startBtn.className = 'button'
stopBtn.className = 'button'
resetBtn.className = 'button'
timer.className = 'timer'
secText.className = 'sec_text'

//Добавляем id для элементов
resetBtn.id = 'reset__btn'
startBtn.id = 'start__btn'
stopBtn.id = 'stop__btn'

let seconds = 0
timer.innerText = seconds
let id

//Слушатель для начала отсчёта
startBtn.addEventListener('click', () => {
    id = setInterval(() => {
        seconds = seconds + 1
        timer.innerText = seconds
    }, 1000)
})

//Слушатель для кнопки stop
stopBtn.addEventListener('click', () => {
    clearInterval(id)
})

//Сброс таймера, перезагрузка страницы
resetBtn.onclick = function () {
    location.reload();
}

root.append(wrapper)
wrapper.append(wrapperBtn, timer, secText)
wrapperBtn.append(startBtn, stopBtn, resetBtn)