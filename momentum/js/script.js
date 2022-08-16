const timeContainer = document.querySelector('.time')
const dateContainer = document.querySelector('.date')
const greetingContainer = document.querySelector('.greeting')
const nameInput = document.querySelector('.name')
const body = document.querySelector('body')
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}
const prewPictureButton = document.querySelector('.slide-prev')
const nextPictureButton = document.querySelector('.slide-next')





getSlideNext = () => {
    bgNum++
    if (bgNum > 20) {
        bgNum = 1
    }
    setBg()
}

getSlidePrew = () => {
    bgNum--
    if (bgNum < 1) {
        bgNum = 20
    }
    setBg()
}

prewPictureButton.addEventListener('click', getSlidePrew)
nextPictureButton.addEventListener('click', getSlideNext)


getGreetingsText = () => {
    const date = new Date()
    const hours =  date.getHours() 

    if (hours >= 6 && hours <12) {
        return 'Доброе утро'
    } else if (hours >= 12 && hours <18) {
        return 'Добрый день'
    } else if (hours >= 18 && hours < 24) {
        return 'Добрый вечер'
    } else {
        return 'Доброй ночи'
    }
}

getRandomNum = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let bgNum = getRandomNum(1, 20)

setBg = () => {
    
    const img = new Image()
    let timeOfDay = getGreetingsText()
    
   bgNum = (bgNum + '').padStart(2, '0')
   

    if (timeOfDay === 'Доброе утро') {
        timeOfDay = 'morning'
    } else if (timeOfDay === 'Добрый день') {
        timeOfDay = 'afternoon'
    } else if (timeOfDay === 'Добрый вечер') {
        timeOfDay = 'evening'
    } else timeOfDay = 'night'

    
    console.log(timeOfDay);
    console.log(bgNum);
    img.src = `https://raw.githubusercontent.com/lotaar/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`

    img.onload =() => {
        body.style.backgroundImage = `url(https://raw.githubusercontent.com/lotaar/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`
    }
    
    
}
setBg()




setLocalStorage = () => {
    localStorage.setItem('name', nameInput.value)
}

getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        nameInput.value = localStorage.getItem('name')
    }
}
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)



showGreetings = () => {
    text = getGreetingsText()
    greetingContainer.textContent = text
}

showDate = () => {
    const date = new Date()
    const currentDate = date.toLocaleDateString('ru-Ru', options)
    dateContainer.textContent = currentDate
}
showTime = () => {
    const date = new Date()
    const currentTime = date.toLocaleTimeString('ru-Ru')
    timeContainer.textContent = currentTime
    showDate()
    showGreetings()
    setTimeout(showTime, 1000)
}





showTime()

