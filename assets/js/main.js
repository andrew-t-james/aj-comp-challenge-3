var navToggle = document.querySelector('.nav-toggle');
var ctx = document.getElementById('line-graph').getContext('2d');

navToggle.addEventListener('click', toggleNav);

function toggleNav() {
  var sidebar = document.querySelector(".sidebar");

  if (sidebar.style.width !== "23rem") {
    document.querySelector(".sidebar").style.width = "23rem";
    document.querySelector(".main").style.marginLeft = "23rem";
  } else {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".main").style.marginLeft = "0";
  }
}

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',
  // The data for our dataset
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: "Applicants",
      backgroundColor: 'rgba(103, 184, 191, 0.6)',
      borderColor: 'rgb(103, 184, 191)',
      data: [300, 190, 215, 193, 230, 342, 338, 206, 149, 270, 202, 251, 182, 200],
      fill: false,
      borderWidth: .3,
    }]
  },
  // Configuration options go here
  options: {
    legend: { display: false },
    responsive: true,
    maintainAspectRatio: false
  }
});
