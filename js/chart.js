Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: "Spending per Month",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [690, 420, 690, 200, 4200, 3434, 6560, 8575, 2523, 1540, 4500, 4302],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

var counter = +0;
for(var i = 0; i <= 11; i++)
{
  console.log(myLineChart.data.labels[counter]);
  myLineChart.data.labels[counter] = 5000;
  counter++;
}
myLineChart.render();

//Pie Chart
var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP,
  {
    type: 'pie',
    data:
    {
        labels: ["Bills", "Recreation", "Food", "Gas", "Excess"],
        datasets:
        [
            {
                data: [50, 15, 15, 17, 3],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }
        ]
    },
    options:
    {
        responsive: true
    }
});
