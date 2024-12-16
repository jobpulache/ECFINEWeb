// carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    960: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});

// Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// chart line and bar
const ctx = document.getElementById("myChartLineBar");

const mixedChart = new Chart(ctx, {
  data: {
    datasets: [
      {
        type: "bar",
        label: "Horas",
        data: [3, 0, 0.5, 0, 0, 0, 0],
        borderWidth: 1,
        borderColor: "rgb(59, 84, 228)",
        backgroundColor: "rgba(59, 84, 228, 0.2)",
      },
      {
        type: "line",
        label: "Meta",
        data: [1.083, 3, 0.5, 0.34, 0.5, 1.3, 2, 0.3],
        borderWidth: 1,
        borderColor: "rgb(225, 193, 7)",
        backgroundColor: "rgba(255, 193, 7, .3)",
        color: "#fff",
      },
    ],
    labels: [
      "07 feb",
      "08 feb",
      "09 feb",
      "10 feb",
      "11 feb",
      "12 feb",
      "13 feb",
      "14 feb",
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: true,
          lineWidth: 0.05,
          color: "rgba(255, 255, 255, .6)",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          lineWidth: 0.05,
          color: "rgba(255, 255, 255, .6)",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          color: "rgb(255, 255, 255)",
        },
      },
      responsive: true,
    },
  },
});

// chart doughnut
const ctx2 = document.getElementById("myChartDoughnut");

const mixedChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          "rgb(204, 142, 231)",
          "rgb(131, 217, 136)",
          "rgb(116, 231, 209)",
        ],
        borderColor: "#000",
      },
    ],
    labels: ["Desarrollo web", "Desarrollo Móvil", "Ingeniería"],
    options: { 
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          align: "center",
          labels: {
            color: "rgb(255, 255, 255)",
          },
        },
      },
      responsive: true,
    },
  },
});


const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
var myCollapse = document.getElementById("myCollapse");
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: true,
});
