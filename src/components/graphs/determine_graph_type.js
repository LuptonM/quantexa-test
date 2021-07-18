export const determine_graph_type = (type) => {
  if (type === "stacked_bar" || type === "grouped_bar") type = "bar";

  return type;
};
