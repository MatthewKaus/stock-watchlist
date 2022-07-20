<script>
    import Line from "svelte-chartjs/src/Line.svelte";

    let symbol = "DJIA";

    const URL = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1d?token=pk_f8e6e4aac42d46d6bd065871f17a8b0b`;

    const xValues = [];
    const dateLabels = [];
    let companyName = "";

    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            companyName = data[0].label;
            for (let i = 0; i < data.length; i++) {
                xValues.push(data[i].close);
                dateLabels.push(data[i].label);
            }
        })
        .catch((error) => console.log("ERROR"));

    let dataLine = {
        labels: dateLabels,
        datasets: [
            {
                label: companyName,
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(225, 204,230, .3)",
                borderColor: "rgb(205, 130, 158)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgb(205, 130,1 58)",
                pointBackgroundColor: "rgb(255, 255, 255)",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(0, 0, 0)",
                pointHoverBorderColor: "rgba(220, 220, 220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: xValues,
            },
        ],
    };
</script>

<Line data={dataLine} options={{ responsive: true }} />
