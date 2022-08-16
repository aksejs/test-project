const author = document.querySelector('.author')
const quote = document.querySelector('.quote')
const changeQuoteButton = document.querySelector('.change-quote')


getRandomNum = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

getQuotes = async () => {
    const quotes = '~/assets/quotes.json'
    const res = await fetch(quotes)
    const data = await res.json()
    console.log(data);
    
    let randomQuote = getRandomNum(0, 99)

    author.textContent = data[randomQuote].author
    quote.textContent = `"${data[randomQuote].text}"`
}

getQuotes()

changeQuoteButton.addEventListener('click', getQuotes)