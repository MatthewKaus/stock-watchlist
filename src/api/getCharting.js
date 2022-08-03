async function fetchChartJSON() {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        xValues.push(data[i].close);
        dateLabels.push(data[i].label);
    }
    // console.log(data);
}