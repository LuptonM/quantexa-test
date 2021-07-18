import { group_data } from "./group_by.js";
import { unique_values } from "./unique_values";
import { palette_maker } from "./palette_generator.js";
import { ContactsOutlined } from "@material-ui/icons";

export const simple_chart = (
  data,
  type,
  xaxis,
  yaxis,
  yaxis_modification,
  palette,
  xaxis_modification
) => {
  yaxis_modification = yaxis_modification ? yaxis_modification : "sum";

  let graph_data = [];
  let labels = [];
  let label = yaxis_modification.concat(" of ").concat(yaxis);
  let backgroundColors = [];
  let borderColors = [];
  let borderWidth = 1;

  let group_args = [xaxis];

  let grouped_data = group_data(
    data,
    group_args,
    yaxis_modification,
    yaxis,
    xaxis_modification
  );

  let datasets = [];

  labels = unique_values(grouped_data, xaxis);
  if (xaxis_modification === "by_month") {
    labels = labels.map((label) => {
      return label.split("/")[1];
    });
  }
  graph_data = unique_values(grouped_data, yaxis_modification);
  backgroundColors = palette_maker(palette, labels.length);
  borderColors = backgroundColors;

  if (type !== "line") {
    datasets = [
      {
        label: label,
        data: graph_data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: borderWidth,
      },
    ];
  } else {
    datasets = [
      {
        label: label,
        data: graph_data,
        fill: false,
        borderColor: borderColors,
        borderWidth: borderWidth,
      },
    ];
  }

  return { labels: labels, datasets: datasets };
};
