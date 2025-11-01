const canvas_teleop = document.getElementById('graph_teleop');
const ctx_teleop = canvas_teleop.getContext('2d');

const canvas_auto = document.getElementById("graph_auto");
const ctx_auto = canvas_auto.getContext("2d");

const params = new URLSearchParams(window.location.search);
const teamName = params.get("team") || "Unknown Team";

console.log('Team Name:', teamName);

document.addEventListener("DOMContentLoaded", function() {
  const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
      {
          label: 'Blue Alliance',
          data: [65, 15, 65, 25, 75, 80, 45, 34, 56, 78, 65, 99],
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(75, 192, 192, 0.5)",
      },
      {
          label: 'Red Alliance',
          data: [15, 25, 35, 75, 55, 20, 95, 64, 36, 18, 55, 78],
          borderColor: "rgb(192, 75, 75)",
          backgroundColor: "rgb(192, 75, 75, 0.5)",
      }
    ]
  };

  const config_teleop = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Teleop ${teamName}: FTC Average Match Scores`,
        }
      }
    },
  };

  const config_auto = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Autonomous ${teamName}: FTC Average Match Scores`,
        }
      }
    },
  };

  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
        });
        chart.update();
    }
    },
    {
      name: 'Add Dataset',
      handler(chart) {
        const data = chart.data;
        const dsColor = Utils.namedColor(chart.data.datasets.length);
        const newDataset = {
          label: 'Dataset ' + (data.datasets.length + 1),
          backgroundColor: Utils.transparentize(dsColor, 0.5),
          borderColor: dsColor,
          data: Utils.numbers({count: data.labels.length, min: -100, max: 100}),
        };
        chart.data.datasets.push(newDataset);
        chart.update();
      }
    },
    {
      name: 'Add Data',
      handler(chart) {
        const data = chart.data;
        if (data.datasets.length > 0) {
          data.labels = Utils.months({count: data.labels.length + 1});

          for (let index = 0; index < data.datasets.length; ++index) {
            data.datasets[index].data.push(Utils.rand(-100, 100));
          }

          chart.update();
        }
      }
    },
    {
      name: 'Remove Dataset',
      handler(chart) {
        chart.data.datasets.pop();
        chart.update();
      }
    },
    {
      name: 'Remove Data',
      handler(chart) {
        chart.data.labels.splice(-1, 1);

        chart.data.datasets.forEach(dataset => {
          dataset.data.pop();
        });

        chart.update();
      }
    }
  ];

  const teleopChart = new Chart(ctx_teleop, config_teleop);
  const autoChart = new Chart(ctx_auto, config_auto);
});