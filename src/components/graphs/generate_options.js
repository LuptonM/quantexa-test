export const generate_options = (type, title, log = false) => {
  let scales;
  if (type !== "stacked_bar") {
    if (log) {
      scales = {
        x: {
          display: true,
        },
        y: {
          display: true,
          type: "logarithmic",
        },
      };
    } else {
      scales = {};
    }
  } else {
    if (log) {
      scales = {
        x: {
          display: true,
          stacked: true,
        },
        y: {
          display: true,
          type: "logarithmic",
          stacked: true,
        },
      };
    } else {
      scales = {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      };
    }
  }

  return {
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
    responsive: true,
    scales: scales,
  };
};
