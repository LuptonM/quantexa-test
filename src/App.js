import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { append_data } from "./actions/append_data";
import { set_columns } from "./actions/set_columns";
import { csv } from "d3";
import aug2016 from "./spend_data/aug2016.csv";
import sept2016 from "./spend_data/sept2016.csv";
import oct2016 from "./spend_data/oct2016.csv";
import july2016 from "./spend_data/july2016.csv";
import Navbar from "./components/navbar/navbar";
import VirtualisedTable from "./components/table/virtualised_table";
import ToggleView from "./components/toggle_view/toggle_view";
import Graphs from "./components/graphs/graphs";
import { convert_data_types } from "./spend_data/convert_data_types";

const expense_files = [july2016, aug2016, sept2016, oct2016];

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.expense_data.data);
  const columns = useSelector((state) => state.expense_data.columns);
  const view = useSelector((state) => state.view);

  useEffect(() => {
    //itterate over csv files and append them
    expense_files.map((file, i) => {
      csv(file).then((data) => {
        // let cleaned_data = convert_data_types (data)
        dispatch(append_data(convert_data_types(data)));
        // set names of columns in data
        if (i === 0 && Object.keys(data[0]))
          dispatch(set_columns(Object.keys(data[0])));
      });
    });
  }, []);

  return (
    <div className="app_container">
      <Navbar />
      <div
        className="container"
        style={{ flexDirection: "column", overflow: "hidden" }}
      >
        <ToggleView />

        <div className="content_container">
          {view === 0 ? (
            <VirtualisedTable data={data} columns={columns} />
          ) : (
            <Graphs />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
