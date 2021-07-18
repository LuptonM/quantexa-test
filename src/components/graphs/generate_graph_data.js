import { simple_chart } from "./simple_chart.js";
import { colour_chart } from "./colour_chart.js";

export const generate_graph_data = (
  data,
  type,
  xaxis,
  yaxis,
  yaxis_modification,
  colour_column,
  size_column,
  palette,
  xaxis_modification
) => {
  if (
    (type === "stacked_bar" && colour_column && colour_column !== xaxis) ||
    (type === "grouped_bar" && colour_column && colour_column !== xaxis) ||
    (type === "line" && colour_column && colour_column !== xaxis)
  ) {
    return colour_chart(
      data,
      type,
      xaxis,
      yaxis,
      yaxis_modification,
      colour_column,
      palette,
      xaxis_modification
    );
  } else if (
    type === "line" ||
    type === "stacked_bar" ||
    type === "grouped_bar"
  ) {
    return simple_chart(
      data,
      type,
      xaxis,
      yaxis,
      yaxis_modification,
      palette,
      xaxis_modification
    );
  }
};
