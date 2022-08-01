import dotenv from 'dotenv';
dotenv.config();

export let symbol;
let token = "uohdaqlnvpoo58yzsugrtywv2t7whnvc3s1ndngh";
const URL = `https://stocknewsapi.com/api/v1?tickers=${symbol}&items=10&token=${token}`;

async function fetchNewsJSON() {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const news = data.data;
    return news;
}

