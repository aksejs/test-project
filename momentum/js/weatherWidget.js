const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city')

getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=209c903596d321ab73d1794f31c6193f&units=metric`
    
    try {
        const res = await fetch(url)
        const data = await res.json()
        if (res.status === 404) {
            weatherIcon.classList = `weather-icon owf`
            temperature.textContent = ``
            weatherDescription.textContent = 'Не удается загрузить данные: проверьте правильность названия города'
            wind.textContent = ``
            humidity.textContent = ``
        } else {
            weatherIcon.classList.add(`owf-${data.weather[0].id}`)
            temperature.textContent = `${Math.round(data.main.temp)}°C`
            weatherDescription.textContent = data.weather[0].description
            wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`
            humidity.textContent = `Влажность: ${data.main.humidity}%`
        }
        
    } catch(e){
        console.log(e)
    }
}


city.addEventListener('change', function(e) {
    city.value = this.value
    getWeather()
    localStorage.setItem('city', city.value)
})

let getCityFromLocalStorage = () => {
    if (localStorage.getItem('city') ) {
        city.value = localStorage.getItem('city')
    } else {
        city.value = 'Минск'
    }
    getWeather()
}

window.addEventListener('load', getCityFromLocalStorage)

