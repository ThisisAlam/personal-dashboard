
const query = 'nature'
async function renderImage(query){
    await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${query}`)
        .then(res => {
            if(!res.ok){
                throw Error('Somwthing went wrong')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            if (!data){
                throw Error('Somwthing went wrong')
            }
            document.body.style.backgroundImage=`url(${data.urls.regular})`
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition= 'center'
            document.body.style.backgroundRepeat= 'no-repeat'
            document.getElementById('author').textContent = 'Author: ' + data.user.name
        })
        .catch(err => {
            console.error('Error Caught:', err)
            document.body.style.backgroundImage=`url(https://images.unsplash.com/photo-1629971459025-2c73de204a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzcwMTMzNjl8&ixlib=rb-4.1.0&q=80&w=1080)`
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition= 'center'
            document.body.style.backgroundRepeat= 'no-repeat'
            document.getElementById('author').textContent = 'Author: Lex Melony'
        })
}
let icon = ''
const coinName = 'dogecoin'
async function renderCoinDetails(coinName) {
    await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}`)
        .then(res => {
            if(!res.ok){
                throw Error('Something went wrong')
            }
            return res.json()
        })
        .then(data => {
            if(!data){
                throw Error('Something went wrong')
            }
            console.log(data)
            document.getElementById('coin-img').src = (data.image.small)
            document.getElementById('coin-name').textContent = (data.name)
            document.getElementById('current-price').textContent= '💰 '+ (data.market_data.current_price.usd)
            document.getElementById('high-24').textContent='📈 '+(data.market_data.high_24h.usd)
            document.getElementById('low-24').textContent='📉 '+(data.market_data.low_24h.usd)
        })
        .catch(err => {
            console.log('Error: ', err)

        })
}
function updatedateTime(){
    
// console.log(date.toLocaleTimeString("en-us", {timeStyle: "medium"})
    
    const date = document.getElementById('current-date')
    const time = document.getElementById('current-time')
    const now = new Date()
    date.textContent = now.toLocaleDateString()
    time.textContent = now.toLocaleTimeString()
    setInterval( updatedateTime, 1000)

}

const weatherApiKey = '21dd969575e8117958f6111586be1328'
async function updateWeather(lat, lon, weatherApiKey, icon){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)
        .then(res => {
            if(!res.ok){
                throw Error('Something went wrong')
            }
            return res.json()
        })
        .then(data => {
            if(!data){
                throw Error('Something went wrong')
            }
            console.log(data)
            console.log(data.name)
            console.log(data.main.temp)
            const icon = data.weather[0].icon
            document.getElementById('weather-img').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
            document.getElementById('city-name').textContent = "City name: " + (data.name)
            document.getElementById('city-temp').textContent = "Temperature (C): " + Math.floor(data.main.temp)
        })
        .catch(err => {
            console.log('Error: ', err)
        })
}

function getGeolocation(icon){
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            console.log('position latitude: ', lat)
            console.log('position longitude: ', lon)
            updateWeather(lat, lon, weatherApiKey, icon)
            
        },
        error => {
            console.log('Error:', error.message)
        }
    )
}
getGeolocation()
updatedateTime()
renderCoinDetails(coinName)
renderImage(query)
