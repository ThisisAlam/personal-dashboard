
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
renderCoinDetails(coinName)
renderImage(query)
