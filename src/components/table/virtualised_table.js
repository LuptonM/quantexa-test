import React, { useEffect, useState } from "react";
import {
  Column,
  Table,
  SortDirection,
  AutoSizer,
  ColumnSizer,
} from "react-virtualized";
import "react-virtualized/styles.css";

// Table data as a array of objects

const render_columns = (columns) => {
  return columns.map((column, i) => {
    return <Column width={300} label={column} dataKey={column} key={i} />;
  });
};

export default function VirtualisedTable({ data, columns }) {
  return (
    <React.Fragment>
      <div className="table_container">
        <AutoSizer>
          {({ height, width }) => (
            <Table
              width={width}
              height={height}
              headerHeight={20}
              rowHeight={30}
              rowCount={data.length}
              rowGetter={({ index }) => data[index]}
            >
              {render_columns(columns)}
            </Table>
          )}
        </AutoSizer>
      </div>
      <div style={{ height: "5em", width: "100%" }} />
    </React.Fragment>
  );
}
