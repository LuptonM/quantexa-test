import React from "react";
import GraphItem from "./graph_item";

const default_palette = [
  "#6929c4",
  "#9f1853",
  "#198038",
  "#b28600",
  "#8a3800",
  "#f95d6a",
  "#1192e8",
  "#fa4d56",
];

const graph_config = [
  {
    type: "line",
    xaxis: "Date",
    yaxis: "Amount",
    yaxis_modification: "count",
    colour_column: "Invoice Currency Unit",
    title: "Count of transactions by month by currency",
    yaxis_log: true,
    xaxis_modification: "by_month",
    palette: default_palette,
  },
  {
    type: "line",
    xaxis: "Date",
    yaxis: "Amount",
    yaxis_modification: "sum",
    colour_column: "",
    title: "Total expenditure (£) per day",
    yaxis_log: false,
    palette: default_palette,
  },
  {
    type: "stacked_bar",
    xaxis: "Expense Area",
    yaxis: "Amount",
    yaxis_modification: "sum",
    colour_column: "Invoice Currency Unit",
    title: "Total expenditure (£) by expense area by currency",
    yaxis_log: true,
    palette: default_palette,
  },
  {
    type: "stacked_bar",
    xaxis: "Date",
    yaxis: "Amount",
    yaxis_modification: "sum",
    colour_column: "Expense Type",
    title: "Total daily expenditure (£) by expense type",
    yaxis_log: true,
    palette: default_palette,
  },
];

function MultiGraphs({ config }) {
  return config.map((settings, i) => {
    return <GraphItem settings={settings} index={i} key={i} />;
  });
}

export default function Graphs({}) {
  return (
    <div className="graphs_container">
      <MultiGraphs config={graph_config} />
    </div>
  );
}
