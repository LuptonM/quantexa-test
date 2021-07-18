export const stacked_bar_options = {
  tooltips: {
    displayColors: true,
    callbacks: {
      mode: "x",
    },
  },
  scales: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
      type: "linear",
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: { position: "top" },
};
