import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { generate_options } from "./generate_options";
import { determine_graph_type } from "./determine_graph_type.js";
import { generate_graph_data } from "./generate_graph_data";

export default function GraphItem({ settings, index }) {
  const data = useSelector((state) => state.expense_data.data);
  const [graph_data, set_graph_data] = useState([]);

  useEffect(() => {
    set_graph_data(
      generate_graph_data(
        data,
        settings.type,
        settings.xaxis,
        settings.yaxis,
        settings.yaxis_modification,
        settings.colour_column,
        settings.size_column,
        settings.palette,
        settings.xaxis_modification
      )
    );
  }, [data, settings]);

  useEffect(() => {
    const ctx = document.getElementById("chart".concat(index));

    if (settings.type) {
      var myChart = new Chart(ctx, {
        type: determine_graph_type(settings.type),
        data: graph_data,
        options: generate_options(
          settings.type,
          settings.title,
          settings.yaxis_log
        ),
      });

      return () => myChart.destroy();
    }
  }, [graph_data]);

  return (
    <div
      className="chart_container"
      style={{ height: "100%", flex: 1, width: "90%" }}
    >
      <canvas id={"chart".concat(index)} />
    </div>
  );
}
