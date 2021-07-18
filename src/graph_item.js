import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import { useSelector } from "react-redux";
import { generate_options } from "./generate_options.js";

export default function GraphMaker({ graph_settings, index }) {
  const data = useSelector((state) => state.expense_data.data);
  const [graph_data, set_graph_data] = useState([]);
  const [graph_options, set_graph_options] = useState();

  useEffect(() => {
    set_graph_data(
      genrate_graph_data(
        data,
        settings.type,
        settings.xaxis,
        settings.yaxis,
        settings.yaxis_modification,
        settings.colour_column
      )
    );
  }, [
    data,
    graph_settings.type,
    graph_settings.xaxis,
    graph_settings.yaxis,
    graph_settings.yaxis_modification,
    graph_settings.colour_column,
  ]);

  useEffect(() => {
    const ctx = document.getElementById("chart".concat(String(index)));

    if (graphType) {
      var myChart = new Chart(ctx, {
        type: graph_settings.type,
        data: graph_data,
        options: generate_options(settings.type, settings.colour_column),
      });

      return () => myChart.destroy();
    }
  }, [graph_settings.type, graph_data]);

  return (
    <div className="chart_container">
      <canvas id={"chart".concat(String(index))} />
    </div>
  );
}
