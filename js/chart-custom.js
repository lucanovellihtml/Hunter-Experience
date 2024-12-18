// Definisco i dati da mostrare nel grafico
var data = {
    labels: ["2022", "2023", "2024"],
    datasets: [
        {
            label: "Collaborazione effettuate",
            pointBackgroundColor: "black",
            pointBorderColor: "black",
            borderColor: "#f2c65f",
            data: [2, 6, 11]
        },
    ]
};
// Ottengo il contesto 2D del Canvas in cui mostrare il grafico
var ctx = document.getElementById("myChart").getContext("2d");
// Crea il grafico e visualizza i dati
const stackedLine = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
});
