import { group_data } from "./group_by.js";
import { unique_values } from "./unique_values.js";
import { palette_maker } from "./palette_generator.js";
import { sort_array_by_key } from "./sort_array_by_key.js";
import moment from 'moment'

const data_set_row_data = (grouped_data, value, column, valueColumn) => {
  let row_data = [];

  grouped_data.map((row) => {
    if (row[column] === value) {
      row_data.push(row[valueColumn]);
    }
  });

  return row_data;
};

export const colour_chart = (
  data,
  type,
  xaxis,
  yaxis,
  yaxis_modification,
  colour_column,
  palette,
  xaxis_modification
) => {
  yaxis_modification = yaxis_modification ? yaxis_modification : "Sum";

  let labels = [];
  let label = [];
  let backgroundColors = [];
  let borderColors = [];
  let borderWidth = 1;
  let group_args;

  group_args = [xaxis, colour_column];

  let grouped_data = group_data(
    data,
    group_args,
    yaxis_modification,
    yaxis,
    xaxis_modification
  );



 grouped_data = sort_array_by_key(grouped_data, xaxis )

  labels = unique_values(grouped_data, xaxis, xaxis_modification)

  if (xaxis_modification === "by_month") {
    labels.map((label) => {
      return label.split("/")[1];
    });
  }

  label = unique_values(grouped_data, colour_column).sort();

  backgroundColors = palette_maker(palette, label.length);
  borderColors = backgroundColors;

  let datasets = [];

  label.map((column, i) => {
    if (type !== "line") {
      datasets.push({
        label: label[i],
        backgroundColor: backgroundColors[i],
        borderColor: backgroundColors[i],
        borderWidth: 1,
        data: data_set_row_data(
          grouped_data,
          label[i],
          colour_column,
          yaxis_modification
        ),
      });
    } else {
      datasets.push({
        label: label[i],
        borderColor: backgroundColors[i],
        borderWidth: 1,
        fill: false,
        data: data_set_row_data(
          grouped_data,
          label[i],
          colour_column,
          yaxis_modification
        ),
      });
    }
  });

  return { labels: labels, datasets: datasets };
};
