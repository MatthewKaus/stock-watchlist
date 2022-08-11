
// const token = import.meta.env.STOCKNEWSAPI
// console.log(token)

// let symbol = 'TSLA'

export async function fetchNewsJSON(symbol) {
    const URL = `https://stocknewsapi.com/api/v1?tickers=${symbol}&items=1&token=${import.meta.env.VITE_STOCKNEWSAPI}`;
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const news = data.data;
    return news;
}